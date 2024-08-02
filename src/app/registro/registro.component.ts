// registro.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null
  };

  constructor(private router: Router, private authService: AuthService) {}

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password: string): boolean {
    return password.length >= 6;
  }

  validateForm(): boolean {
    if (!this.validateEmail(this.form.email)) {
      alert('Please enter a valid email.');
      return false;
    }
    if (!this.validatePassword(this.form.password)) {
      alert('Password must be at least 6 characters long.');
      return false;
    }
    if (this.form.password !== this.form.confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    return true;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.validateForm()) {
      const user = {
        name: this.form.username,
        email: this.form.email,
        password: this.form.password
      };

      this.authService.register(user).subscribe({
        next: (response) => {
          console.log('User registered successfully', response);
          alert('Registration successful!');
          this.router.navigate(['/login']); // Redirigir al login después del registro
        },
        error: (error) => {
          console.error('Registration error', error);
          alert('Registration failed. Please try again.');
        }
      });
    }
  }

  navigateToLogin(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/login']);
  }
}
