import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de importar los módulos necesarios
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    email: null,
    password: null
  };

  constructor(private router: Router, private authService: AuthService) {}

  // Validación de correo electrónico
  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Validación de contraseña
  validatePassword(password: string): boolean {
    return password.length >= 6;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.validateEmail(this.form.email)) {
      alert('Por favor, introduce un email válido.');
      return;
    }
    if (!this.validatePassword(this.form.password)) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Llamar al servicio de autenticación
    this.authService.login(this.form.email, this.form.password).subscribe({
      next: (response) => {
        console.log('Login exitoso', response);
        // Redirige a la página del menú
        this.router.navigate(['/menu']);
      },
      error: (error) => {
        console.error('Error de autenticación', error);
        alert('Credenciales inválidas. Por favor, intenta nuevamente.');
      }
    });
  }

  navigateToRegister(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/register']); // Navega al componente de registro
  }
  
}
