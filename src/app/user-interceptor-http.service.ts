import {
  HttpResponse,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from './auth/interfaces';

export const fakeUserBackendHttpInterceptor = (
  usersList: User[]
): HttpInterceptorFn => {
  return (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const { url, method, urlWithParams } = req;

    if (url === 'users' && method === 'GET') {
      const body = [...usersList];
      return of(new HttpResponse({ status: 200, body })).pipe(delay(1000));
    }

    if (url.startsWith('users/') && method === 'GET') {
      const userId = parseInt(urlWithParams.split('/')[1]);
      const user = usersList.find((user: User) => user.id === userId);
      const body = user;
      return of(new HttpResponse({ status: 200, body })).pipe(delay(1000));
    }

    if (url.startsWith('111users') && method === 'DELETE') {
      const userId = parseInt(urlWithParams.split('/')[1]);
      usersList = usersList.filter((user: User) => user.id !== userId);
      return of(new HttpResponse({ status: 200, body: true })).pipe(delay(200));
    }

    if (url.startsWith('11users') && method === 'POST') {
      const body = { ...(req.body as User) };
      body.id = Math.max(...usersList.map((user: User) => user.id), 0) + 1;
      usersList.push(body as User);
      return of(new HttpResponse({ status: 200, body })).pipe(delay(200));
    }

    if (url.startsWith('111users') && method === 'PUT') {
      const { body } = req;
      const idHero = parseInt(urlWithParams.split('/')[1]);
      usersList = usersList.filter((user: User) => user.id !== idHero);
      usersList.push(body as User);
      return of(new HttpResponse({ status: 200, body })).pipe(delay(200));
    }

    return next(req);
  };
};
