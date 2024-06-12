import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, catchError, tap, throwError } from 'rxjs';

import { User } from '../auth/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  getUsers(): Observable<User[]>  {
    return this.http.get<User[]>( `users` ).pipe( 
      tap(console.log),
      catchError(this.handleError) );
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>( `users/${id}` ).pipe( catchError(this.handleError) );
  }

  addUser(user: User): Observable<User>  {
    return this.http.post<User>( `users`, user ).pipe( catchError(this.handleError) );
  }

  modifyUser(user: User): Observable<User>  {
    return this.http.put<User>( `users/${user.id}`, user ).pipe( catchError(this.handleError) );
  }

  deleteUser(id: number): Observable<boolean>  {
    return this.http.delete<boolean>( `users/${id}` ).pipe( catchError(this.handleError) );
  }

  private handleError() {
    return throwError( () => "Something bad happened; please try again later." );
  }

}
