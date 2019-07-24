import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyBaseComponent} from './company-base/company-base.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
