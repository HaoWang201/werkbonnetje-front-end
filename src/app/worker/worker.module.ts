import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerRoutingModule } from './worker-routing.module';
import { WorkerBaseComponent } from './worker-base/worker-base.component';

@NgModule({
  declarations: [WorkerBaseComponent],
  imports: [
    CommonModule,
    WorkerRoutingModule
  ],
  bootstrap: [
    WorkerBaseComponent
  ]
})
export class WorkerModule { }
