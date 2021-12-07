import {
    FetchErrorAction,
    FetchUsersAction,
    FetchUsersSuccessAction,
    UsersAction,
    UsersActionType,
    UsersState,
} from '../../types/users';

const initialState: UsersState = {
    isLoading: false,
    error: null,
    users: [],
};

export const usersReducer = (
    state = initialState,
    action: UsersAction
): UsersState => {
    switch (action.type) {
        case UsersActionType.FETCH_USERS:
            return { ...state, isLoading: true, error: null, users: [] };
        case UsersActionType.FETCH_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                users: action.payload,
            };
        case UsersActionType.FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                users: [],
            };

        default:
            return state;
    }
};

export const fetchUsersAction = (): FetchUsersAction => ({
    type: UsersActionType.FETCH_USERS,
});

export const fetchUsersSuccessAction = (
    payload: any[]
): FetchUsersSuccessAction => ({
    type: UsersActionType.FETCH_USERS_SUCCESS,
    payload,
});

export const fetchErrorAction = (payload: string): FetchErrorAction => ({
    type: UsersActionType.FETCH_ERROR,
    payload,
});
