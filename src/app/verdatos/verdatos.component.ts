import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense.service'; // Asegúrate de importar el servicio
import { NgxPaginationModule } from 'ngx-pagination'; // Importa NgxPaginationModule

@Component({
  selector: 'app-verdatos',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule], // Añade NgxPaginationModule aquí
  templateUrl: './verdatos.component.html',
  styleUrls: ['./verdatos.component.css']
})
export class VerdatosComponent implements OnInit {
  expenses: any[] = [];
  currentPage: number = 1; // Variable para la paginación
  itemsPerPage: number = 10; // Elementos por página

  constructor(private router: Router, private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe({
      next: (data) => {
        this.expenses = data;
      },
      error: (error) => {
        console.error('Error al cargar los gastos', error);
        alert('No se pudieron cargar los gastos.');
      }
    });
  }

  onEdit(id: number): void {
    console.log('Editar elemento con ID:', id);
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este gasto?')) {
      this.expenseService.deleteExpense(id).subscribe({
        next: () => {
          console.log('Elemento eliminado con éxito');
          this.loadExpenses();
        },
        error: (error) => {
          console.error('Error eliminando el gasto', error);
          alert('Error eliminando el gasto');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/menu']);
  }
}
