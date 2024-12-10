import { Component,inject,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeesInterface } from '../../interfaces/employees-interface';
import { FormGroup, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { EmployeesService } from '../../services/employees.service';


@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatButtonModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeesInterface, private employeeService: EmployeesService, public dialogref: MatDialogRef<DeleteDialogComponent> ){
    this.employeeToDelete = data;
  }
  employeeToDelete!: EmployeesInterface;

  deleteForm = new FormGroup({
    firstName: new FormControl({value: '', disabled:true}),
    lastName: new FormControl({value: '', disabled:true}),
    position: new FormControl({value: '', disabled:true}),
    salary: new FormControl({value: '', disabled:true}),
  });

  

  ngOnInit() {
    this.deleteForm.controls['firstName'].setValue(this.employeeToDelete.firstName);
    this.deleteForm.controls['lastName'].setValue(this.employeeToDelete.lastName);
    this.deleteForm.controls['position'].setValue(this.employeeToDelete.position);
    this.deleteForm.controls['salary'].setValue(this.employeeToDelete.salary);
  }

  onSubmit(){
    let employeeId = this.employeeToDelete.id;
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: (data) => {
        console.log(data);
    
      },
      //if something went wrong 
      error: (err) => {
        console.log(err);
      },
      //if our code completed successfully this code will executed.
      complete: () =>{
        console.log('Employee deleted successfuly');
      }
    });
    this.dialogRef.close(); 
  }

  // to close the dialog when clicking on cancel button
  readonly dialogRef = inject(MatDialogRef<EmployeesInterface>);
  onCancel(){
    this.dialogRef.close();
  }


}
