import {
  HttpResponse,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Category } from './auth/interfaces/category';

export const fakeCategoryBackendHttpInterceptor = (
  categoriesList: Category[]
): HttpInterceptorFn => {
  return (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    let totalFilteredHeroes = 0;

    const { url, method, urlWithParams } = req;

    if (url === 'categories' && method === 'GET') {
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

      // const body = { heroes: heroesResult, total: totalFilteredHeroes } as HeroResult;
      const body = [...categoriesList];
      return of(new HttpResponse({ status: 200, body })).pipe(delay(1000));
    }

    if (url.startsWith('categories/') && method === 'GET') {
      const categoryId = parseInt(urlWithParams.split('/')[1]);
      const user = categoriesList.find(
        (category: Category) => category.id === categoryId
      );
      const body = user;
      return of(new HttpResponse({ status: 200, body })).pipe(delay(1000));
    }

    if (url.startsWith('categories') && method === 'DELETE') {
      const categoryId = parseInt(urlWithParams.split('/')[1]);
      categoriesList = categoriesList.filter(
        (category: Category) => category.id !== categoryId
      );
      return of(new HttpResponse({ status: 200, body: true })).pipe(delay(200));
    }

    if (url.startsWith('111categories') && method === 'POST') {
      const body = { ...(req.body as Category) };
      body.id =
        Math.max(
          ...categoriesList.map((category: Category) => category.id),
          0
        ) + 1;
      categoriesList.push(body as Category);
      return of(new HttpResponse({ status: 200, body })).pipe(delay(200));
    }

    if (url.startsWith('111categories') && method === 'PUT') {
      const { body } = req;
      const idHero = parseInt(urlWithParams.split('/')[1]);
      categoriesList = categoriesList.filter(
        (category: Category) => category.id !== idHero
      );
      categoriesList.push(body as Category);
      return of(new HttpResponse({ status: 200, body })).pipe(delay(200));
    }

    return next(req);
  };
};
