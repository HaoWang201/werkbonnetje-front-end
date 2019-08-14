import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyBaseComponent} from './company-base/company-base.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectsComponent} from './projects/projects.component';
import {MyFormsComponent} from './my-forms/my-forms.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyBaseComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          name: 'Dashboard'
        }
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          name: 'Projects'
        }
      },
      {
        path: 'myForms',
        component: MyFormsComponent,
        data: {
          name: 'My Forms'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
