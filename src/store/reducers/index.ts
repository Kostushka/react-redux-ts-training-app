import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    user: usersReducer,
    todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
