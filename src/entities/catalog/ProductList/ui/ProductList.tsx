import styles from './ProductList.module.css';
import { Button, ProductCard } from 'shared/ui';
import { useGetProductsQuery } from 'shared/model/api';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import { incrementPage } from '../model/slice';
import { IData } from '../../../../shared/model/interface';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ProductList = () => {
    const category = useAppSelector((state) => state.filter.selectedCategory);
    const page = useAppSelector((state) => state.productPage.page);
    const searchString = useAppSelector((state) => state.searchString.searchString);
    const dispatch = useAppDispatch();
    const { data, error, isLoading, isFetching } = useGetProductsQuery({
        page,
        category,
        searchString,
    });
    const products: IData = isFetching && page === 1 ? null : data;

    if (error) return <p>Error!</p>;
    return (
        <div className={styles.wrapper}>
            <ul className={styles.catalog_grid}>
                {isLoading || isFetching
                    ? [...Array(products ? products.products.length + 9 : 9)].map((_, i) => (
                          <li key={i}>
                              <Skeleton height={360} width={280} containerTestId='skeleton' />
                              <Skeleton height={19} containerTestId='skeleton' />
                              <Skeleton height={29} containerTestId='skeleton' />
                          </li>
                      ))
                    : products &&
                      products.products.map((product, i: number) => (
                          <ProductCard
                              id={product.id}
                              img={product.thumbnail}
                              title={product.title}
                              price={product.price}
                              key={i}
                          />
                      ))}
            </ul>
            {products && products.products.length !== products.total && (
                <>
                    <Button
                        title='Show more'
                        type='accent'
                        onClick={() => dispatch(incrementPage())}
                        disabled={isLoading || isFetching}
                    />
                </>
            )}
        </div>
    );
};
