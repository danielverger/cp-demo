import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Category } from '../../app/auth/interfaces';


export const CategoryActions = createActionGroup({
  source: 'Category',
  events: {
    'get Categories': emptyProps,
    'get Categories success': props<{ result: Category[] }>(),
    'get Categories failed': props<{payload:string}>(),

    'get Category': props<{id:number}>(),
    'get Category success': props<{ category: Category }>(),
    'get Category failed': props<{payload:string}>(),

    'delete Category': props<{category: Category}>(),
    'delete Category success': props<{ deleted: boolean }>(),
    'delete Category failed': props<{payload:string}>(),

    'Add Category': props<{category: Category}>(),
    'Add Category success': emptyProps,
    'Add Category failed': props<{payload:string}>(),

    'Edit Category': props<{category: Category}>(),
    'Edit Category success': emptyProps,
    'Edit Category failed': props<{payload:string}>(),
  },
});
