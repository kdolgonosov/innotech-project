import styles from './Checkbox.module.css';

type Props = {
    title: string;
    value?: string | number;
};

export const Checkbox = (props: Props) => {
    // const setStyle = (type: 'accent' | 'gray' | 'ghost' | 'clear') => {
    //     switch (type) {
    //         case 'accent':
    //             return styles.button_type_accent;
    //         case 'gray':
    //             return styles.button_type_gray;
    //         case 'ghost':
    //             return styles.button_type_ghost;
    //         case 'clear':
    //             return styles.button_type_clear;
    //     }
    // };

    return (
        <div className={styles.wrapper}>
            <input
                type='checkbox'
                name={props.title}
                id={props.title}
                value={props.value}
                className={styles.checkbox}
            />
            <label htmlFor={props.title} className={styles.label}>
                {props.title}
            </label>
        </div>
    );
};
