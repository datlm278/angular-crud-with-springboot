import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {EmployeeService} from "../../../service/employee/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../../../model/employee";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form!: NgForm
  action: String = 'Save';
  title: String = "Add new Employee";
  employee: Employee = {
    "id": 0,
    "name": "",
    "address": "",
    "email": "",
    "phoneNumber": "",
    "status": 0,
    "organizationId": 0,
    "organizationName": ""
  };

  constructor(private employeeService: EmployeeService,
              private matDialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public editEmployee: Employee) {
  }

  ngOnInit(): void {
    console.log(this.editEmployee)
    if (this.editEmployee) {
      this.action = 'Update'
      this.title = 'Update employee'

      this.employee.id = this.editEmployee.id;
      this.employee.name = this.editEmployee.name;
      this.employee.address = this.editEmployee.address;
      this.employee.email = this.editEmployee.email;
      this.employee.status = this.editEmployee.status;
      this.employee.phoneNumber = this.editEmployee.phoneNumber;
      this.employee.organizationId = this.editEmployee.organizationId;
    }
  }

  createEmployee(form: NgForm) {
    if (!this.editEmployee) {
      this.employeeService.createNemEmployee(form.value)
        .subscribe({
          next: (res) => {
            form.reset();
            this.matDialogRef.close('save');
          },
          error: () => {
            alert("Error while creating employee!")
          }
        })
    } else {
      this.updateEmployee(form)
    }
  }

  private updateEmployee(form: NgForm) {
    this.employeeService.updateEmployee(this.employee, this.editEmployee.id)
      .subscribe({
        next:(res)=>{
          form.reset()
          this.matDialogRef.close('update')
        },
        error:()=>{
          alert("Error while updating employee!")
        }
      })
  }
}
