import {
  HttpResponse,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http'
import { from, of } from 'rxjs'
import { delay, map, skip, take } from 'rxjs/operators'
import { User } from './auth/interfaces'
import * as users from './../assets/users.json';
import * as heroes from './../assets/heroes.json'

export const fakeUserBackendHttpInterceptor = (usersList: User[]) : HttpInterceptorFn => {

  return (req: HttpRequest<unknown>, next: HttpHandlerFn) => {

    let totalFilteredHeroes = 0;

    const { url, method, urlWithParams } = req;

    if ( url === 'users' && method === 'GET' ) {
      // const searchParams  = new URLSearchParams( urlWithParams.split( '?' )[1] );
      // const pageSize      = parseInt( searchParams.get( 'pageSize') ?? '10' );
      // const pageIndex     = parseInt( searchParams.get( 'pageIndex') ?? '0' );
      // const name          = searchParams.get( 'name' ) ?? '';
      // const sortField     = searchParams.get( 'sortField' ) as keyof Hero || 'name';
      // const sortDirection = searchParams.get( 'sortDirection' ) ?? '';
      // const heroesResult: Hero[] = [];

      // const filteredDataObservable$ = of( heroesList )
      //   .pipe(
      //     map( ( data: Hero[] ) => {
      //       return data.filter( hero =>
      //         hero.name.toUpperCase().includes( name.toLocaleUpperCase() )
      //       )
      //       .sort( ( a: Hero, b: Hero ) => {
      //         return  (a[sortField] < b[sortField] ? 1 : -1) * (sortDirection === 'desc' ? 1 : -1)
      //       })
      //     }),
      //   )

      // filteredDataObservable$.subscribe( ( filteredData: Hero[] ) => {
      //   totalFilteredHeroes = filteredData.length;
      //   from( filteredData ).pipe(
      //     skip( pageIndex * pageSize ),
      //     take( pageSize ))
      //     .subscribe( ( hero: Hero ) => {
      //       heroesResult.push( hero );
      //     });
      // });

      const body = [...usersList]
      return of( new HttpResponse({ status: 200, body }) ).pipe(delay(1000));
    }

    if ( url.startsWith( 'users/' ) && method === 'GET' ) {
      const userId = parseInt( urlWithParams.split('/')[1] );
      const user = usersList.find( (user: User) => user.id === userId );
      const body = user;
      return of( new HttpResponse({ status: 200, body }) ).pipe(delay(1000));
    }

    if ( url.startsWith( 'users' ) && method === 'DELETE' ) {
      const userId = parseInt( urlWithParams.split('/')[1] );
      usersList = usersList.filter( ( user: User ) => user.id !== userId );
      return of( new HttpResponse({ status: 200, body: true }) ).pipe(delay(200));
    }

    if ( url.startsWith( 'users' ) && method === 'POST' ) {
      const body = { ...(req.body as User) };
      body.id = Math.max( ...usersList.map( ( user:User ) => user.id ), 0 ) + 1;
      usersList.push(body as User);
      return of( new HttpResponse({ status: 200, body }) ).pipe(delay(200));
    }

    if ( url.startsWith( 'users' ) && method === 'PUT' ) {
      const { body } = req;
      const idHero = parseInt(urlWithParams.split( '/' )[1]);
      usersList = usersList.filter( ( user: User ) => user.id !== idHero );
      usersList.push(body as User);
      return of( new HttpResponse({ status: 200, body }) ).pipe(delay(200));
    }

    return next(req);
  }
}
