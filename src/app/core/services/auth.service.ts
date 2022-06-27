import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, Observable, of, tap} from "rxjs";
import localeFr from "@angular/common/locales/fr";

/**
 * Handles authentication and manages tokens and users in the local storage
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService
{

  readonly TOKEN_KEY = 'auth-token';
  readonly USER_KEY = 'auth-user';
  readonly AUTH_API = environment.apiURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: any | null = null;

  constructor(private api: HttpClient, public router: Router)
  {
  }

  /**
   * Logs user in against server using email & password
   * Then saves the received token in localstorage and tries to request user infos
   *
   * @param credentials
   * @return Observable<any>
   */
  login(credentials: { email: string, password: string }): Observable<any>
  {
    return this.api.post<any>(this.AUTH_API + 'login', credentials, {
      headers: this.headers
    }).pipe(tap((res: any) =>
      {
        this.saveToken(res.token);
        this.getUserProfile().subscribe((res: any) =>{
          if(res){
            this.currentUser = res;
            this.saveUser(res);
          }
        })
      }), catchError((error: HttpErrorResponse): Observable<{status: number, user: any}> =>
      {
          return of({status: error.status, message: error.message, user: null})
      })
    );
  }

  /**
   * Gets user profile from API
   *
   * @return Observable<any>
   */
  getUserProfile(): Observable<any>
  {
    return this.api.get<any>(this.AUTH_API + '/users/account');
  }

  /**
   * Posts a new user to the API
   *
   * @param user
   * @return Observable<any>
   */
  register(user: any): Observable<any>
  {
    return this.api.post<any>(this.AUTH_API+'register', user, {
      headers: this.headers
    })
  }

  /**
   * Removes auth token from local storage and redirects to login page
   */
  logout(): void
  {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['login']);
  }

  /**
   * Saves auth token into local storage
   * (removes previous token if any exists)
   *
   * @param token
   */
  saveToken(token: string): void
  {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Retrieves auth token from local storage
   *
   * @return string|null
   */
  getToken(): string | null
  {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Saves user into local storage
   * (removes previous user if any exists)
   *
   * @param user
   */
  saveUser(user: any): void
  {
    localStorage.removeItem(this.USER_KEY);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  /**
   * Retrieves usqer from local storage
   *
   * @return any|null
   */
  getUser(): any | null
  {
    const lsUser = localStorage.getItem(this.USER_KEY);
    if(!lsUser) return null;
    this.currentUser = JSON.parse(lsUser);
    return this.currentUser;
  }

  /**
   * Checks if a user is logged in (if a token exists in the local storage)
   *
   * @return boolean
   */
  get isLoggedIn(): boolean
  {
    let authToken = localStorage.getItem(this.TOKEN_KEY);
    return authToken !== null;
  }
}
