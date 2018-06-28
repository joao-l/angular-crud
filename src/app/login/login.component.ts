import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService, User } from '../shared/index';
import { ConfirmationService } from 'primeng/primeng';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent {
  user: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private confirmationService: ConfirmationService) { }

  onSignin(form: NgForm) {
    this.user = new User();
    this.user.email = form.value.email;
    this.user.password = form.value.password;

    if (!this.user) { return; }
    this.authService
      .signinUser(this.user)
      .subscribe(decodedToken => {
        this.onLoggedin();
        this.router.navigate(['/dashboard']);
      }, (err: HttpErrorResponse) => {
        this.confirmationService.confirm({
          header: 'Login Inválido',
          message: 'Favor, faça o login novamente!',
          accept: () => {
            form.reset();
          }
        });
      });
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }
}
