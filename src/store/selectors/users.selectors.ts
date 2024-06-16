import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "../reducers";
import { UserActionsType } from "../actions";

export const selectUsersState = createFeatureSelector<UsersState>('users');

// export const selectUsersLoading = createSelector(
//   selectUsersState,
//   (state) => state.loading
// );

// export const selectUsersLoading = createSelector(
//   selectUsersState,
//   (state) => state.type === C_GET_USERS
// );

// export const selectUserLoading = createSelector(
//   selectUsersState,
//   (state) => state.type === C_GET_USER
// );

export const selectUsersActionType = (types: string[]) => createSelector(
  selectUsersState,
  (state) => types.includes(state.type)
);

// export const selectUserSaving = createSelector(
//   selectUsersState,
//   (state) => state.saving
// );

export const selectUsersError = createSelector(
  selectUsersState,
  ({error, type}) => {return {error, type}}
);

export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.result
);

// export const selectTotalHeroes = createSelector(
//   selectUsersState,
//   (state) => state.heroResult.total
// );

// export const selectHeroesFilter = createSelector(
//   selectUsersState,
//   (state) => state.heroFilter
// );

export const selectUser = createSelector(
  selectUsersState,
  ({ user, type }) => { return { user, loaded: type === UserActionsType.C_GET_USER_SUCCESS } }
);

export const selectDeletedUser = createSelector(
  selectUsersState,
  ({ user, type }) => { return { user, deleted: type === UserActionsType.C_DELETE_USER_SUCCESS } }
);

export const selectModifiedUser = createSelector(
  selectUsersState,
  ({ user, type }) => { return { 
    user, 
    modified: [UserActionsType.C_ADD_USER_SUCCESS, UserActionsType.C_UPDATE_USER_SUCCESS].some(e => e === type) 
  } }
);
