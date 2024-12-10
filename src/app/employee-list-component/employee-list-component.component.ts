import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { EmployeesInterface } from '../interfaces/employees-interface';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-employee-list-component',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatFormFieldModule,MatInputModule,MatSortModule,MatDialogModule, MatPaginator, MatPaginatorModule],
  templateUrl: './employee-list-component.component.html',
  styleUrl: './employee-list-component.component.scss'
})
export class EmployeeListComponentComponent implements OnInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  employeesDataArray:any = [];
  dataSource = new MatTableDataSource<EmployeesInterface>();
  columnsToDisplay = ['firstName', 'lastName', 'position', 'salary', 'Update', 'Delete'];

  constructor(private employeeService: EmployeesService, private dialog: MatDialog){}

  ngOnInit() {
    //this is where we get our data inside this ngOnInit method
    /*here we are calling our service and we're getting data from getEmployees method */
    // this.employeesDataArray= this.employeeService.getEmployees();
    this.updateDataSource();
  }

  onUpdate(employee: EmployeesInterface){
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: employee,
    });
    dialogRef.afterClosed().subscribe(result => {
      //calling the updated data from API 
      this.updateDataSource();
    })

  }
  onDelete(employee: EmployeesInterface){
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '500px',
      width: '500px',
      data: employee,
    });

    dialogRef.afterClosed().subscribe(result => {
      //calling the updated data from API 
      this.updateDataSource();
    })
  }
  
  updateDataSource(){
    this.employeeService.getEmployees().subscribe({
      //data could be any other name.
      next: (data) => {
        console.log(data);
        this.employeesDataArray = data;
        this.dataSource = new MatTableDataSource<EmployeesInterface>(this.employeesDataArray);
        console.log(this.dataSource);
      },
      //if something went wrong 
      error: (err) => {
        console.log(err);
      },
      //if our code completed successfully this code will executed.
      complete: () =>{
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // to filetr by first and last name only
        //boolean is the return type
        this.dataSource.filterPredicate = function(data, filter: string): boolean{
          return data.firstName.toLocaleLowerCase().includes(filter) ||
          data.lastName.toLocaleLowerCase().includes(filter)
         }
        console.log('data loaded successfuly');
      }
    });
    //this.dataSource.connect().next(dataArray);
  }
  /*$event will get an error because typescript requires to define
   the data type and it's going to be event type,
   so we change it to event: Event
  */
  onSearch(event: Event){
    const searchValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue.trim().toLocaleLowerCase();
  }

}
