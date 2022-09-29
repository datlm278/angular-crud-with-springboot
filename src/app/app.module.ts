import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {EmployeeComponent} from './admin/employee/employee.component';
import {OrganizationComponent} from './admin/organization/organization.component';
import {LoginComponent} from './admin/login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {SidebarComponent} from './admin/sidebar/sidebar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "./service/employee/employee.service";
import {HttpClientModule} from "@angular/common/http";
import {ConfirmDialogComponent} from './admin/confirm-dialog/confirm-dialog.component';
import {DialogComponent} from "./admin/employee/dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    OrganizationComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    DialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
