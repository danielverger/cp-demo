import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, tap, throwError } from 'rxjs';

import { Category } from '../auth/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly http = inject(HttpClient);

  getCategories(): Observable<Category[]>  {
    return this.http.get<Category[]>( `categories` ).pipe( 
      catchError(this.handleError) );
  }

  getCategory(id: number): Observable<Category>{
    return this.http.get<Category>( `categories/${id}` ).pipe( catchError(this.handleError) );
  }

  addCategory(user: Category): Observable<Category>  {
    return this.http.post<Category>( `categories`, user ).pipe( catchError(this.handleError) );
  }

  modifyCategory(user: Category): Observable<Category>  {
    return this.http.put<Category>( `categories/${user.id}`, user ).pipe( catchError(this.handleError) );
  }

  deleteCategory(id: number): Observable<boolean>  {
    return this.http.delete<boolean>( `categories/${id}` ).pipe( catchError(this.handleError) );
  }

  private handleError() {
    return throwError( () => "Something bad happened; please try again later." );
  }

}
