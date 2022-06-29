import {HTTP_INTERCEPTORS, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "@/core/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

  TOKEN_HEADER_KEY = 'Authorization';
  constructor(private authService: AuthService)
  {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let authReq = req;
    const token = this.authService.getToken();
    let headers = req.headers
    if (token)
      authReq = req.clone({headers: headers.set(this.TOKEN_HEADER_KEY, 'Bearer ' + token)});
    return next.handle(authReq);
  }
}
