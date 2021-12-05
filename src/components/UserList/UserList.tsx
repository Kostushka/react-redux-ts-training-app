import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './UserList.module.css';

const UserList: React.FC = () => {
    const { users, isLoading, error } = useTypedSelector((state) => state.user);
    console.log(users, isLoading, error);

    return <></>;
};

export default UserList;
