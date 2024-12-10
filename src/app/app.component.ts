import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { EmployeeCreateComponentComponent } from './employee-create-component/employee-create-component.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink
  ,MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee-management';
}
