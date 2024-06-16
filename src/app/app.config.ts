import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { fakeUserBackendHttpInterceptor } from './user-interceptor-http.service';
import * as users from './../assets/users.json';
import * as categories from './../assets/categories.json';
import { fakeCategoryBackendHttpInterceptor } from './category-interceptor-http.service';
import { provideStore } from '@ngrx/store';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducers } from '../store/app.reducers';
import { EffectsArray } from '../store/effects';
import * as usersEffects from '../store/effects/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([
        fakeUserBackendHttpInterceptor((users as any).default),
        fakeCategoryBackendHttpInterceptor((categories as any).default),
      ])
    ),
    provideStore({ ...appReducers, router: routerReducer }),
    provideRouterStore(),
    provideEffects(usersEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
