// expense.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Asegúrate de que esta URL es la correcta

  constructor(private http: HttpClient) {}

  // Obtener todos los gastos
  getExpenses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/expenses`)
      .pipe(
        catchError((error) => {
          console.error('Error al obtener gastos', error);
          return throwError(error);
        })
      );
  }

  // Eliminar un gasto por ID
  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/expenses/${id}`)
      .pipe(
        catchError((error) => {
          console.error('Error al eliminar gasto', error);
          return throwError(error);
        })
      );
  }

  // Actualizar un gasto (opcional)
  updateExpense(id: number, expenseData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(`${this.apiUrl}/expenses/${id}`, expenseData, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error al actualizar gasto', error);
          return throwError(error);
        })
      );
  }
}
