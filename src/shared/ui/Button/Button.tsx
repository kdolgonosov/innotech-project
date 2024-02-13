import styles from './Button.module.css';

type Props = {
    type: 'accent';
    title: string;
    addStyle?: {
        [key: string]: string;
    };
};

export const Button = (props: Props) => {
    return (
        <button className={styles.button} style={props?.addStyle}>
            {props.title}
        </button>
    );
};
