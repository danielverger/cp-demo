import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../app/auth/interfaces';

export const UserActions = createActionGroup({
  source: 'Users',
  events: {
    'get Users': emptyProps,
    'get Users success': props<{ result: User[] }>(),
    'get Users failed': props<{payload:string}>(),

    'get User': props<{id:number}>(),
    'get User success': props<{ user: User }>(),
    'get User failed': props<{payload:string}>(),

    'delete User': props<{user: User}>(),
    'delete User success': props<{ deleted: boolean }>(),
    'delete User failed': props<{payload:string}>(),

    'add User': props<{user: User}>(),
    'add User success': emptyProps,
    'add User failed': props<{payload:string}>(),

    'update User': props<{user: User}>(),
    'update User success': emptyProps,
    'update User failed': props<{payload:string}>(),
  },
});


export const UserActionsType = {
  C_GET_USERS           : UserActions.getUsers.type,
  C_GET_USERS_SUCCESS   : UserActions.getUsersSuccess.type,
  C_GET_USERS_FAILED    : UserActions.getUsersFailed.type,
  C_GET_USER            : UserActions.getUser.type,
  C_GET_USER_SUCCESS    : UserActions.getUserSuccess.type,
  C_GET_USER_FAILED     : UserActions.getUserFailed.type,
  C_DELETE_USER         : UserActions.deleteUser.type,
  C_DELETE_USER_SUCCESS : UserActions.deleteUserSuccess.type,
  C_DELETE_USER_FAILED  : UserActions.deleteUserFailed.type,
  C_ADD_USER            : UserActions.addUser.type,
  C_ADD_USER_SUCCESS    : UserActions.addUserSuccess.type,
  C_ADD_USER_FAILED     : UserActions.addUserFailed.type,
  C_UPDATE_USER         : UserActions.updateUser.type,
  C_UPDATE_USER_SUCCESS : UserActions.updateUserSuccess.type,
  C_UPDATE_USER_FAILED  : UserActions.updateUserFailed.type,
}
// export const C_GET_USERS_SUCCESS = UserActions.getUsersSuccess.type;
// export const C_GET_USERS_FAILED = UserActions.getUsersFailed.type;
// export const C_GET_USER = UserActions.getUser.type;
// export const C_GET_USER_SUCCESS = UserActions.getUserSuccess.type;
// export const C_GET_USER_FAILED = UserActions.getUserFailed.type;
// export const C_DELETE_USER = UserActions.deleteUser.type;
// export const C_DELETE_USER_SUCCESS = UserActions.deleteUserSuccess.type;
// export const C_DELETE_USER_FAILED = UserActions.deleteUserFailed.type;
// export const C_ADD_USER = UserActions.addUser.type;
// export const C_ADD_USER_SUCCESS = UserActions.addUserSuccess.type;
// export const C_ADD_USER_FAILED = UserActions.addUserFailed.type;
// export const C_UPDATE_USER = UserActions.updateUser.type;
// export const C_UPDATE_USER_SUCCESS = UserActions.updateUserSuccess.type;
// export const C_UPDATE_USER_FAILED = UserActions.updateUserFailed.type;
