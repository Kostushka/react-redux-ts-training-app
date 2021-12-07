import {
    TodoActions,
    TodoActionsType,
    TodoState,
    FetchTodoAction,
    FetchTodoSuccessAction,
    FetchTodoErrorAction,
    SetTodoPageAction,
} from '../../types/todo';

const initialState: TodoState = {
    todo: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 10,
};

export const todoReducer = (
    state = initialState,
    action: TodoActions
): TodoState => {
    switch (action.type) {
        case TodoActionsType.FETCH_TODO:
            return { ...state, isLoading: true };
        case TodoActionsType.FETCH_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todo: action.payload,
            };
        case TodoActionsType.FETCH_TODO_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case TodoActionsType.SET_TODO_PAGE:
            return { ...state, page: action.payload };
        default:
            return state;
    }
};

export const fetchTodoAction = (): FetchTodoAction => ({
    type: TodoActionsType.FETCH_TODO,
});
export const fetchTodoSuccessAction = (
    payload: any[]
): FetchTodoSuccessAction => ({
    type: TodoActionsType.FETCH_TODO_SUCCESS,
    payload,
});
export const fetchTodoErrorAction = (
    payload: string
): FetchTodoErrorAction => ({
    type: TodoActionsType.FETCH_TODO_ERROR,
    payload,
});
export const setTodoPageAction = (payload: number): SetTodoPageAction => ({
    type: TodoActionsType.SET_TODO_PAGE,
    payload,
});
