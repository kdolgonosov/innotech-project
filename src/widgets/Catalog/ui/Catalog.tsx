import styles from './Catalog.module.css';
import { SectionLayout } from 'shared/ui';
import { FilterBar } from 'features/catalog/FilterBar';
import { ProductList } from 'entities/catalog/ProductList';
type Props = {};

export const Catalog = (props: Props) => {
    return (
        <section className={styles.catalog}>
            <SectionLayout>
                <h2 className={styles.title}>Catalog</h2>
                <div className={styles.wrapper}>
                    <FilterBar />
                    <ProductList />
                </div>
            </SectionLayout>
        </section>
    );
};
