import styles from './ProductList.module.css';
import { Button } from 'shared/ui';
import ProductImg from 'assets/product-sneakers-1.jpg';
const products = [
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
    { img: ProductImg, title: "Nike Air Force 1 '07 QS", price: 110 },
];
export const ProductList = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.catalog_grid}>
                {products.map((product, i) => (
                    <li key={i} className={styles.catalog_grid_item}>
                        <img src={product.img} alt={product.title} className={styles.img} />
                        <h4 className={styles.title}>{product.title}</h4>
                        <span className={styles.price}>{product.price}&nbsp;&#36;</span>
                    </li>
                ))}
            </ul>
            <Button title='Show more' type='accent' />
        </div>
    );
};
