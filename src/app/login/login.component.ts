import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private router: Router){

  }
  onSubmit() {
    if (this.username === 'dudu' && this.password === '111') {
      alert('Login successful!');
      this.errorMessage = '';
      // Redirect to employees
      this.router.navigate(['/employees']); 
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}
