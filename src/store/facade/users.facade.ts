import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import * as selectors from '../../store/selectors';
import { UserActionsType, UserActions } from "../actions";
import { User } from "../../app/auth/interfaces";
import { filter } from "rxjs";

@Injectable()
export class UsersFacade {
  #store      = inject(Store);
  loading     = this.#store.selectSignal(selectors.selectUsersActionType([UserActionsType.C_GET_USERS]));
  loadingUser = this.#store.selectSignal(selectors.selectUsersActionType([UserActionsType.C_GET_USER]));
  // saving      = this.#store.selectSignal(selectors.selectUserSaving);

  userError$   = this.#store.select(selectors.selectUsersError).pipe( filter(({type}) => type === UserActionsType.C_GET_USERS_FAILED) )
  usersError$   = this.#store.select(selectors.selectUsersError).pipe( filter(({type}) => type !== UserActionsType.C_GET_USERS_FAILED) )
  deletedUser$  = this.#store.select(selectors.selectDeletedUser)
  modifiedUser  = this.#store.select(selectors.selectModifiedUser)
  selecUsers$   = this.#store.select(selectors.selectUsers) 
  selectedUser$ = this.#store.select(selectors.selectUser)

  getUsers()             { this.#store.dispatch(UserActions.getUsers()); }
  deleteUser(user: User) { this.#store.dispatch(UserActions.deleteUser({ user })); }
  getUser(id: number)    { this.#store.dispatch(UserActions.getUser({ id })); }
  addUser(user: User)    { this.#store.dispatch(UserActions.addUser({ user })); }
  updateUser(user: User) { this.#store.dispatch(UserActions.updateUser({ user })); }

}