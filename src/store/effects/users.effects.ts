import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { inject } from "@angular/core";
import { UserActions } from '../actions/users.actions';
import { UserService } from "../../app/services/user.service";

export const loadUsers$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(UserActions.getUsers),
      mergeMap(
        (action) => userService.getUsers()
          .pipe(
            map(result => UserActions.getUsersSuccess({ result })),
            catchError(err => of(UserActions.getUsersFailed({ payload: err })))
          )
      )
    )
  },
  {functional: true}
);

export const loadUser$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(UserActions.getUser),
      mergeMap(
        (action) => userService.getUser(action.id)
          .pipe(
            map(user => UserActions.getUserSuccess({ user })),
            catchError(err => of(UserActions.getUserFailed({ payload: err })))
          )
      )
    )
  },
  {functional: true}
);

export const deleteHero$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap(
        (action) => userService.deleteUser(action.user.id)
          .pipe(
            map(deleted => UserActions.deleteUserSuccess({ deleted })),
            catchError(err => of(UserActions.deleteUserFailed({ payload: err })))
          )
      )
    )
  },
  {functional: true}
);

export const addUser$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(UserActions.addUser),
      mergeMap(
        (action) => userService.addUser(action.user)
          .pipe(
            map(() => UserActions.addUserSuccess()),
            catchError(err => of(UserActions.addUserFailed({ payload: err })))
          )
      )
    )
  },
  {functional: true}
);

export const editUser$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap(
        (action) => userService.modifyUser(action.user)
          .pipe(
            map(() => UserActions.updateUserSuccess()),
            catchError(err => of(UserActions.updateUserFailed({ payload: err })))
          )
      )
    )
  },
  {functional: true}
);


