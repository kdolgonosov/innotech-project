import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import styles from './Input.module.css';

type Props = {
    type: 'text' | 'number';
    name?: string;
    value: string;
    placeholder: string;
    defaultValue?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
    addStyle?: {
        [key: string]: string;
    };
};

export const Input = (props: Props) => {
    return (
        <input
            type={props.type}
            name={props.name}
            className={styles.input}
            style={props.addStyle}
            placeholder={props.placeholder}
            defaultValue={props.value}
            value={props.value}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
        />
    );
};
