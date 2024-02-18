import styles from './ProductCard.module.css';

type Props = {
    id: string;
    img: string;
    title: string;
    price: string | number;
};

export const ProductCard = (props: Props) => {
    return (
        <li className={styles.item}>
            <a href={`products/${props.id}`} className={styles.linkWrapper}>
                <img src={props.img} alt={props.title} className={styles.img} />
                <h4 className={styles.title}>{props.title}</h4>
                <span className={styles.price}>{props.price}&nbsp;&#36;</span>
            </a>
        </li>
    );
};
