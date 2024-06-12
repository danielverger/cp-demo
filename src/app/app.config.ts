import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { fakeUserBackendHttpInterceptor } from './user-interceptor-http.service';
import * as users from './../assets/users.json';
import * as categories from './../assets/categories.json';
import { fakeCategoryBackendHttpInterceptor } from './category-interceptor-http.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([fakeUserBackendHttpInterceptor( (users as any).default), fakeCategoryBackendHttpInterceptor( (categories as any).default)])
    ),
  ]
};
