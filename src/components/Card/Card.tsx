import { FC, useState } from 'react';
import styles from './Card.module.css';

export enum CardVariant {
    border = 'border',
    background = 'background',
}

interface CardPropsType {
    width: string;
    height: string;
    variant: CardVariant;
    onClick: (num: string) => void;
}

const Card: FC<CardPropsType> = ({
    width,
    height,
    variant,
    onClick,
    children,
}) => {
    const [state] = useState('Human');

    return (
        <div
            style={{
                width,
                height,
                border:
                    variant === CardVariant.border ? '2px solid red' : 'none',
                background:
                    variant === CardVariant.background ? 'grey' : 'none',
            }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;
