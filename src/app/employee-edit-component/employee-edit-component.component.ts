import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { EmployeesInterface } from '../interfaces/employees-interface';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-employee-edit-component',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './employee-edit-component.component.html',
  styleUrl: './employee-edit-component.component.scss'
})
export class EmployeeEditComponentComponent implements OnInit {
  employeesDataArray:EmployeesInterface[] = [];
  columnsToDisplay = ['FirstName', 'LastName', 'Position', 'Salary', 'Edit', 'Delete'];

  constructor(private employeeService: EmployeesService){}

  ngOnInit() {
    this.employeesDataArray= this.employeeService.getEmployees();
    console.log(this.employeesDataArray);
  }
}
