import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../service/employee/employee.service";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  employeeForm !: FormGroup
  action: String = 'Save';
  title: String = "Add new Employee";

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService,
              private matDialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public editEmployee: Employee) {
  }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      status: ['', Validators.required]
    })
    console.log(this.editEmployee)
    if (this.editEmployee) {
      this.action = 'Update'
      this.title = 'Update employee'
      this.employeeForm.controls['name'].setValue(this.editEmployee.name);
      this.employeeForm.controls['address'].setValue(this.editEmployee.address);
      this.employeeForm.controls['email'].setValue(this.editEmployee.email);
      this.employeeForm.controls['status'].setValue(this.editEmployee.status.toString());
      this.employeeForm.controls['phoneNumber'].setValue(this.editEmployee.phoneNumber);
    }
  }

  createEmployee() {
    console.log(this.employeeForm.value)
    if (!this.editEmployee) {
      if (this.employeeForm.valid) {
        this.employeeService.createNemEmployee(this.employeeForm.value)
          .subscribe({
            next: (res) => {
              this.employeeForm.reset();
              this.matDialogRef.close('save');
            },
            error: () => {
              alert("Error while creating employee!")
            }
          })
      }
    } else {
      this.updateEmployee()
    }
  }

  private updateEmployee() {
    this.employeeService.updateEmployee(this.employeeForm.value, this.editEmployee.id)
      .subscribe({
        next:(res)=>{
          this.employeeForm.reset()
          this.matDialogRef.close('update')
        },
        error:()=>{
          alert("Error while updating employee!")
        }
      })
  }

}
