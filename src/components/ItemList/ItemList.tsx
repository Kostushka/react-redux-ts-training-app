import { FC } from 'react';
import { IUser } from '../../types/types';
import styles from './ItemList.module.css';

interface ItemListPropsType {
    user: IUser;
}

const ItemList: FC<ItemListPropsType> = ({ user }) => {
    return (
        <>
            <div className={styles.item}>
                {user.id} {user.name} go to {user.address.city}
            </div>
        </>
    );
};

export default ItemList;
