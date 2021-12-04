import { UsersAction, UsersActionType, UsersState } from '../../types/users';

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
            return { isLoading: true, error: null, users: [] };
        case UsersActionType.FETCH_USERS_SUCCESS:
            return { isLoading: false, error: null, users: action.payload };
        case UsersActionType.FETCH_ERROR:
            return { isLoading: false, error: action.payload, users: [] };

        default:
            return state;
    }
};
