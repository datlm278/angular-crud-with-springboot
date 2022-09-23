import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./admin/login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {EmployeeComponent} from "./admin/employee/employee.component";
import {OrganizationComponent} from "./admin/organization/organization.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {path: '', pathMatch: "full", redirectTo: 'dashboard'},
          {path: 'dashboard', component: DashboardComponent},
          {path: 'employee', component: EmployeeComponent},
          {path: 'organization', component: OrganizationComponent},
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
