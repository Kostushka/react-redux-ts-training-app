// actions type

export enum UsersActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_ERROR = 'FETCH_ERROR',
}

// actions creator

export interface FetchUsersAction {
    type: UsersActionType.FETCH_USERS;
}
export interface FetchUsersSuccessAction {
    type: UsersActionType.FETCH_USERS_SUCCESS;
    payload: any[];
}
export interface FetchErrorAction {
    type: UsersActionType.FETCH_ERROR;
    payload: string;
}

export type UsersAction =
    | FetchUsersAction
    | FetchUsersSuccessAction
    | FetchErrorAction;

// state types

export interface UsersState {
    isLoading: boolean;
    error: null | string;
    users: any[];
}
