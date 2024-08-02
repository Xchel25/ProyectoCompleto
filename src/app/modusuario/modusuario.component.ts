// modusuario.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modusuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modusuario.component.html',
  styleUrls: ['./modusuario.component.css']
})
export class ModusuarioComponent {
  form: any = {
    name: '',
    email: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    const userId = localStorage.getItem('userId'); // Obtén el ID del usuario desde localStorage
    if (!userId) {
      alert('No se pudo obtener el ID del usuario. Por favor, inicia sesión nuevamente.');
      return;
    }

    this.authService.updateUser(userId, this.form).subscribe({
      next: (response) => {
        console.log('Usuario modificado:', response);
        alert('Usuario modificado exitosamente');
        this.router.navigate(['/menu']);
      },
      error: (error) => {
        console.error('Error modificando el usuario', error);
        if (error.status === 422) {
          alert('Hay un problema con los datos enviados. Por favor verifica y corrige.');
        } else {
          alert('Error modificando el usuario');
        }
      }
    });
  }

  navigateToMenu(): void {
    this.router.navigate(['/menu']);
  }
}
