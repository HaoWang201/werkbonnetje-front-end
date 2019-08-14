import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthBaseComponent} from './auth-base/auth-base.component';
import {LoginPageComponent} from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthBaseComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
