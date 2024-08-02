import styles from './Catalog.module.css';
import { SectionLayout } from 'shared/ui';
import { FilterBar } from 'features/catalog/FilterBar';
import { SearchBar } from 'features/catalog/SearchBar';
import { ProductList } from 'entities/catalog/ProductList';
type Props = {
  title?: string;
  filterBar: boolean;
  searchBar: boolean;
};

export const Catalog = (props: Props) => {
  return (
    <section
      className={styles.catalog}
      id='catalog'
    >
      <SectionLayout>
        {props.title && <h2 className={styles.title}>{props.title}</h2>}
        {props.searchBar && <SearchBar />}
        <div className={styles.wrapper}>
          {props.filterBar && <FilterBar />}
          <ProductList />
        </div>
      </SectionLayout>
    </section>
  );
};
