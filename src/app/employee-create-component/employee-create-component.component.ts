import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
import { EmployeesInterface } from '../interfaces/employees-interface';


@Component({
  selector: 'app-employee-create-component',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule,MatInputModule ],
  templateUrl: './employee-create-component.component.html',
  styleUrl: './employee-create-component.component.scss'
})
export class EmployeeCreateComponentComponent {
  constructor(private router: Router, private employeesService: EmployeesService){}
  //our model for our form
  employeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',Validators.required),
    postion: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required),
  });

  newEmployee!: EmployeesInterface;

  onSubmit(){
    this.newEmployee = 
    {
      id: 0,
      firstName: this.employeeForm.controls['firstName'].value as string,
      lastName: this.employeeForm.controls['lastName'].value as string,
      position: this.employeeForm.controls['postion'].value as string,
      salary: this.employeeForm.controls['salary'].value as string

    }
    this.employeesService.createEmployee(this.newEmployee).subscribe({
      next: (data) => {
        console.log(data);
        
    
      },
      //if something went wrong 
      error: (err) => {
        console.log(err);
      },
      //if our code completed successfully this code will executed.
      complete: () =>{
        console.log('Employee created successfuly');
      }
    });
    console.log(this.employeesService.getEmployees());
    this.router.navigate(['/employees'])
  }
  
  onCancel(){
    this.router.navigate(['/employees'])

  }

}
