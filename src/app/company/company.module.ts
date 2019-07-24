import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyBaseComponent } from './company-base/company-base.component';

@NgModule({
  declarations: [CompanyBaseComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  bootstrap: [
    CompanyBaseComponent
  ]
})
export class CompanyModule { }
