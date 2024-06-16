import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, catchError, tap, throwError } from 'rxjs';

import { User } from '../auth/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`users`)
      .pipe(catchError(() => this.handleError('Recuperar usuarios')));
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get<User>(`users/${id}`)
      .pipe(catchError(() => this.handleError('Recuperar usuario')));
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(`users`, user)
      .pipe(catchError(() => this.handleError('Añadir usuario')));
  }

  modifyUser(user: User): Observable<User> {
    return this.http
      .put<User>(`users/${user.id}`, user)
      .pipe(catchError(() => this.handleError('Modificar usuario')));
  }

  deleteUser(id: number): Observable<boolean> {
    return this.http
      .delete<boolean>(`users/${id}`)
      .pipe(catchError(() => this.handleError('Eliminar usuario')));
  }

  private handleError(error: string) {
    return throwError(() => `Se ha producido un error: ${error}`);
  }
}
