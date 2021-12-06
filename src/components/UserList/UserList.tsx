import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUsersData } from '../../store/actions/getUsersData';
import styles from './UserList.module.css';

const UserList: React.FC = () => {
    const { users, isLoading, error } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsersData());
    }, []);
    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        <>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </>
    );
};

export default UserList;
