import { FC } from 'react';
import { IUser } from '../../types/types';
import ItemList from '../ItemList';
import styles from './UserList.module.css';

interface UserListPropsType {
    users: IUser[];
}

const UserList: FC<UserListPropsType> = ({ users }) => {
    return (
        <div className={styles.container}>
            {users.map((user) => (
                <ItemList key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
