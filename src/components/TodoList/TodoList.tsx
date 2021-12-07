import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getTodoData } from '../../store/actions/getTodoData';
import { setTodoPageAction } from '../../store/reducers/todoReducer';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
    const { todo, isLoading, error, page, limit } = useTypedSelector(
        (state) => state.todo
    );

    const dispatch = useDispatch();

    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        dispatch(getTodoData(page, limit));
    }, [page]);

    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <>
            {todo.map((t) => (
                <div key={t.id}>
                    {t.id}. {t.title}
                </div>
            ))}
            <div className={styles.pages}>
                {pages.map((p) => (
                    <div
                        key={p}
                        onClick={() => dispatch(setTodoPageAction(p))}
                        className={page === p ? styles.active : styles.page}
                    >
                        {p}
                    </div>
                ))}
            </div>
        </>
    );
};

export default TodoList;
