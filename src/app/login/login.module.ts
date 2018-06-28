import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ConfirmDialogModule } from 'primeng/primeng';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    ConfirmDialogModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
