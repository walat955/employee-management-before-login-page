import { Component, inject, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeesInterface } from '../../interfaces/employees-interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-update-dialog',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.scss'
})
export class UpdateDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeesInterface, private employeeService: EmployeesService){
    this.employeeToUpdate = data;
  }
  

  employeeToUpdate!:EmployeesInterface;

  ngOnInit() {
    this.updateForm.controls['firstName'].setValue(this.employeeToUpdate.firstName);
    this.updateForm.controls['lastName'].setValue(this.employeeToUpdate.lastName);
    this.updateForm.controls['position'].setValue(this.employeeToUpdate.position);
    this.updateForm.controls['salary'].setValue(this.employeeToUpdate.salary);
    console.log(this.employeeToUpdate);
  }

  updateForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl('',Validators.required),
    position: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required),
  });

// to close the dialog when clicking on cancel button
  readonly dialogRef = inject(MatDialogRef<EmployeesInterface>);
  onCancel(){
    this.dialogRef.close();
  }

  updateEmployee!: EmployeesInterface;
  onSubmit(){
    this.updateEmployee = 
    {
      id: this.employeeToUpdate.id,
      firstName: this.updateForm.controls['firstName'].value as string,
      lastName: this.updateForm.controls['lastName'].value as string,
      position: this.updateForm.controls['position'].value as string,
      salary: this.updateForm.controls['salary'].value as string

    }
    this.employeeService.updateEmployee(this.updateEmployee).subscribe({
      next: (data) => {
        console.log(data);
    
      },
      //if something went wrong 
      error: (err) => {
        console.log(err);
      },
      //if our code completed successfully this code will executed.
      complete: () =>{
        console.log('Employee updated successfuly');
      }
    });
    this.dialogRef.close(); 
  }

}
