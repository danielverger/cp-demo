import { createReducer, on } from "@ngrx/store";
import {  
  UserActions 
} from '../actions';
import { routerNavigationAction } from "@ngrx/router-store";
import { User } from "../../app/auth/interfaces";
import { UserActionsType } from '../actions/users.actions';

export interface UsersState {
  result: User[],
  // loaded: boolean,
  // loading: boolean,
  // deleted: boolean,
  // modified: boolean,
  // saving: boolean,
  user: User | null,
  error: string | null
  type: string
}

export const heroesInitialState: UsersState = {
  result: [...Array(10)].map(n => {return new User}),
  // loaded: false,
  // loading: false,
  // saving: false,
  // deleted: false,
  // modified: false,
  user: null,
  error: null,
  type: ''
}

export const usersReducer = createReducer<UsersState>(
  heroesInitialState,
  on(UserActions.getUsers, (state) : UsersState => ({ 
    ...state, 
    error: null, 
    // loading: true, 
    // deleted: false, 
    type: UserActions.getUsers.type
  })),
  on(UserActions.getUsersSuccess, (state, {result}) : UsersState => (
    {
     ...state, 
    //  loading: false,
    //  loaded: true,
     result,
     type: UserActions.getUsersSuccess.type
  })),
  on(UserActions.getUsersFailed, (state, {payload}) : UsersState => ({
     ...state, 
    //  loading: false,
    //  loaded: false,
     error: payload,
     result: [],
     type: UserActions.getUsersFailed.type
  })),

  on(UserActions.getUser, (state) : UsersState => ({ 
    ...state, 
    // loaded: false,
    // modified: false,
    // deleted: false, 
    // loading: true,
    error: null,
    type: UserActions.getUser.type
  })),
  on(UserActions.getUserSuccess, (state, {user}) : UsersState => ({
    ...state, 
    // loading: false,
    // loaded: true,
    user,
    type: UserActions.getUserSuccess.type
  })),
  on(UserActions.getUserFailed, (state, {payload}) : UsersState=> ({
    ...state, 
    // loading: false,
    // loaded: false,
    error: payload,
    type: UserActions.getUserFailed.type
  })),

  on(UserActions.deleteUser, (state, {user}) : UsersState => ({
    ...state,
    user,
    // loading: false,
    // deleted: false,
    type: UserActions.deleteUser.type,
    error: null
  })),
  on(UserActions.deleteUserSuccess, (state) : UsersState => ({ 
    ...state, 
    // deleted: true 
    type: UserActions.deleteUserSuccess.type
  })),
  on(UserActions.deleteUserFailed, (state, {payload}) : UsersState => ({ 
    ...state, 
    error: payload,
    type: UserActions.deleteUserFailed.type
  })),

  on(UserActions.addUser, (state, {user}) : UsersState => ({
    ...state,
    user,
    // modified: false,
    // saving: true,
    error: null,
    type: UserActions.addUser.type
  })),
  on(UserActions.addUserSuccess, (state) : UsersState => ({ 
    ...state, 
    // modified: true, 
    // saving: false,
    type: UserActions.addUserSuccess.type
  })),
  on(UserActions.addUserFailed, (state, {payload}) : UsersState => ({ 
    ...state, 
    // saving: false, 
    error: payload,
    type: UserActions.addUserFailed.type
  })),

  on(UserActions.updateUser, (state, {user}) : UsersState => ({
    ...state,
    user,
    // modified: false,
    // saving: true,
    error: null,
    type: UserActions.updateUser.type
  })),
  on(UserActions.updateUserSuccess, (state) : UsersState => ({ 
    ...state, 
    // modified: true, 
    type: UserActions.updateUserSuccess.type
  })),
  on(UserActions.updateUserFailed, (state, {payload}) : UsersState => ({ 
    ...state, 
    // saving: false, 
    error: payload,
    type: UserActions.updateUserFailed.type
  })),
  on(routerNavigationAction, (state) : UsersState => ({...heroesInitialState}) )
);
