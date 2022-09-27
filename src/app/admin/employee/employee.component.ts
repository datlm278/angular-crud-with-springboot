import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {EmployeeService} from "../../service/employee/employee.service";
import {Employee} from "../../model/employee";
import {HttpErrorResponse} from "@angular/common/http";
import {ConfirmDialogComponent, ConfirmDialogModel} from "../confirm-dialog/confirm-dialog.component";

// declare var window: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[] = [];
  private idDelete: number = 0;

  constructor(public dialog: MatDialog, private employeeService: EmployeeService) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(value => {
      if (value === 'save') {
        this.getEmployees();
      }
    })
  }

  editEmployee(row: Employee) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'update') {
        this.getEmployees();
      }
    })
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getAllEmployee().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.idDelete)
      .subscribe(
        (response) => {
          console.log(response);
          this.getEmployees();
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      )
  }

  openDeleteDialog(id: number): void {
    this.idDelete = id;
    const message = `Are you sure you want to delete this employee?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == true) {
        this.deleteEmployee();
      } else {
        this.getEmployees();
      }
    });
  }
}
