import axios from 'axios';
import { Dispatch } from 'react';
import { TodoActions } from '../../types/todo';
import {
    fetchTodoAction,
    fetchTodoErrorAction,
    fetchTodoSuccessAction,
} from '../reducers/todoReducer';

export const getTodoData =
    (page = 1, limit = 10) =>
    async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch(fetchTodoAction());
            const res = await axios.get(
                'https://jsonplaceholder.typicode.com/todos',
                {
                    params: { _page: page, _limit: limit },
                }
            );
            dispatch(fetchTodoSuccessAction(res.data));
        } catch (e) {
            dispatch(fetchTodoErrorAction('Ошибка загрузки'));
        }
    };
