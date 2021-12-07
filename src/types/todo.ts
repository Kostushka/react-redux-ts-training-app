// actions type

export enum TodoActionsType {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

// actions creator

export interface FetchTodoAction {
    type: TodoActionsType.FETCH_TODO;
}
export interface FetchTodoSuccessAction {
    type: TodoActionsType.FETCH_TODO_SUCCESS;
    payload: any[];
}
export interface FetchTodoErrorAction {
    type: TodoActionsType.FETCH_TODO_ERROR;
    payload: string;
}
export interface SetTodoPageAction {
    type: TodoActionsType.SET_TODO_PAGE;
    payload: number;
}

export type TodoActions =
    | FetchTodoAction
    | FetchTodoSuccessAction
    | FetchTodoErrorAction
    | SetTodoPageAction;

// state types

export interface TodoState {
    todo: any[];
    isLoading: boolean;
    error: null | string;
    page: number;
    limit: number;
}
