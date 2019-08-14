import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthBaseComponent} from './auth-base/auth-base.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthBaseComponent, LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AuthBaseComponent
  ]
})
export class AuthModule { }
