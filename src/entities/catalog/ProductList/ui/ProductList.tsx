import styles from './ProductList.module.css';
import { Button, ProductCard } from 'shared/ui';
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
                    <ProductCard
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        key={i}
                    />
                ))}
            </ul>
            <Button title='Show more' type='accent' />
        </div>
    );
};
