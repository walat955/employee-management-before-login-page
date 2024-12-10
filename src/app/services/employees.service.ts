import { Injectable } from '@angular/core';
import { EmployeesInterface } from '../interfaces/employees-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//server is resopnsibale for getting data 

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'http://localhost:5000/api/employees';
  constructor(private http: HttpClient) {}

  getEmployees(){
    //convert our data to an array of objects<EmployeesInterface>
    return this.http.get<EmployeesInterface>('https://localhost:7220/Employees/GetAllEmployees');
  }
  createEmployee(newEmployee: EmployeesInterface)
  {
    //post take 2 parameters URL and newEmployee
    return this.http.post<EmployeesInterface>('https://localhost:7220/Employees/CreateEmployee', newEmployee);

  }
  updateEmployee(updateEmployee: EmployeesInterface){

    return this.http.put<EmployeesInterface>('https://localhost:7220/Employees/UpdateEmployee', updateEmployee);

  }
  //delete dialog
  deleteEmployee(id:number){
    let urlString: string = 'https://localhost:7220/Employees/DeleteEmployee/' + id;
    
    return this.http.delete<EmployeesInterface>(urlString);
  }


  
}
