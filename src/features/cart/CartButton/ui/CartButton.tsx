import styles from './CartButton.module.css';
type Props = { count: number };

export const CartButton = (props: Props) => {
    return (
        <div className={styles.cart}>
            <button className={styles.cart_button}></button>
            {props.count > 0 && <span className={styles.cart_count}>{props.count}</span>}
        </div>
    );
};
