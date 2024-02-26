import styles from './Checkbox.module.css';
import { ChangeEvent } from 'react';

type Props = {
    title: string;
    onClick: (e: ChangeEvent<any>, value: string) => void;
    value: string;
    disabled?: boolean;
};

export const Checkbox = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <input
                type='checkbox'
                name={props.title}
                id={props.title}
                value={props.value}
                className={styles.checkbox}
                disabled={props.disabled}
                onChange={(e) => {
                    props.onClick(e, e.target.value);
                }}
            />
            <label htmlFor={props.title} className={styles.label}>
                {props.title}
            </label>
        </div>
    );
};
