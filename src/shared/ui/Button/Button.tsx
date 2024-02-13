import styles from './Button.module.css';

type Props = {
    type: 'accent' | 'gray' | 'ghost' | 'clear';
    title: string;
    addStyle?: {
        [key: string]: string;
    };
};

export const Button = (props: Props) => {
    const setStyle = (type: 'accent' | 'gray' | 'ghost' | 'clear') => {
        switch (type) {
            case 'accent':
                return styles.button_type_accent;
            case 'gray':
                return styles.button_type_gray;
            case 'ghost':
                return styles.button_type_ghost;
            case 'clear':
                return styles.button_type_clear;
        }
    };

    return (
        <button
            className={`${styles.button}` + ' ' + `${setStyle(props.type)}`}
            style={props?.addStyle}
        >
            {props.title}
        </button>
    );
};
