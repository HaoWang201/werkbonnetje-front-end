import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyBaseComponent } from './company-base/company-base.component';
import { HeaderComponent } from './header/header.component';
import { DropdownMenuComponent } from './shared/componenets/dropdown-menu/dropdown-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { MyFormsComponent } from './my-forms/my-forms.component';

@NgModule({
  declarations: [CompanyBaseComponent, HeaderComponent, DropdownMenuComponent, DashboardComponent, ProjectsComponent, MyFormsComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  bootstrap: [
    CompanyBaseComponent
  ]
})
export class CompanyModule { }
