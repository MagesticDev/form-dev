import {Component, OnInit} from '@angular/core';
import {AuthService} from "@/core/services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  error = {};

  constructor(
    private authService: AuthService,
    private router: Router
  )
  {
    this.loginForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void
  {
  }

  onSubmit(): void
  {
    this.authService.login(this.loginForm.value).subscribe(
      (next: any) => this.router.navigate(['/dashboard']),
      (error: any) => {this.isLoginFailed = true, this.error = error}
    );
  }

}
