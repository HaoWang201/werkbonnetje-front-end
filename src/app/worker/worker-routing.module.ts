import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkerBaseComponent} from './worker-base/worker-base.component';

const routes: Routes = [
  {
    path: '',
    component: WorkerBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
