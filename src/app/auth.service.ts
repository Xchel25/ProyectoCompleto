// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/login`, { email, password }, { headers })
      .pipe(
        tap((response: any) => {
          // Suponiendo que el ID del usuario viene en la respuesta
          localStorage.setItem('userId', response.user.id); // Guarda el ID en localStorage
        }),
        catchError((error) => {
          console.error('Error during login', error);
          return throwError(error);
        })
      );
  }

  register(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/users`, user, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error during registration', error);
          return throwError(error);
        })
      );
  }

  updateUser(userId: string, userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(`${this.apiUrl}/users/${userId}`, userData, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error updating user', error);
          return throwError(error);
        })
      );
  }
}
