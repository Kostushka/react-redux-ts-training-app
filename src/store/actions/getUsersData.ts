import axios from 'axios';
import { Dispatch } from 'react';
import { UsersAction } from '../../types/users';
import {
    fetchErrorAction,
    fetchUsersAction,
    fetchUsersSuccessAction,
} from '../reducers/usersReducer';

export const getUsersData = () => async (dispatch: Dispatch<UsersAction>) => {
    try {
        dispatch(fetchUsersAction());
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        dispatch(fetchUsersSuccessAction(res.data));
    } catch (e) {
        dispatch(fetchErrorAction('Ошибка загрузки'));
    }
};
