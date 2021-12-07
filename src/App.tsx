import TodoList from './components/TodoList';
import UserList from './components/UserList';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <UserList />
            <hr />
            <TodoList />
        </div>
    );
};

export default App;
