import styles from './FilterBar.module.css';
import { useState, MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'shared/model/hooks';
import { useGetAllCategoriesQuery } from 'shared/model/api';
import { setFilter } from '../model/slice';
import { Button } from 'shared/ui';
import { resetPage } from 'entities/catalog/ProductList/model/slice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const FilterBar = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const { data, error, isLoading, isFetching } = useGetAllCategoriesQuery();
    const selected = useAppSelector((state) => state.filter.selectedCategory);
    const dispatch = useAppDispatch();

    const handleSetFilter = (e: MouseEvent<HTMLButtonElement>, cat: string) => {
        dispatch(setFilter(cat));
        dispatch(resetPage());
    };
    const handleResetFilter = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(setFilter(''));
        dispatch(resetPage());
        setSelectedCategory('');
    };
    if (error) return <p>Error!</p>;
    return (
        <aside className={styles.filter}>
            <h3 className={styles.filter_title}>Selection by&nbsp;parameters</h3>
            <span className={styles.filter_categories_title}>Category</span>
            <ul className={styles.filter_categories_list}>
                {isLoading || isFetching
                    ? [...Array(20)].map((_, i) => (
                          <Skeleton key={i} height={60} width={120} containerTestId='skeleton' />
                      ))
                    : !error &&
                      data.map((cat: string, i: number) => (
                          <li className={styles.filter_categories_list_item} key={i}>
                              <button
                                  className={
                                      `${styles.filter_categories_list_item_button}` +
                                      ' ' +
                                      `${
                                          selectedCategory === cat &&
                                          styles.filter_categories_list_item_button_selected
                                      }`
                                  }
                                  onClick={() => setSelectedCategory(cat)}
                                  disabled={selected === cat}
                                  data-testid='category-button'
                              >
                                  {cat}
                              </button>
                          </li>
                      ))}
            </ul>
            <Button
                type='gray'
                title='Apply'
                addStyle={{ margin: '32px 0 35px' }}
                onClick={(e) => handleSetFilter(e, selectedCategory)}
                disabled={isLoading || isFetching || !selectedCategory}
            />
            <Button
                type='clear'
                title='Reset'
                onClick={(e) => handleResetFilter(e)}
                disabled={isLoading || isFetching}
            />
        </aside>
    );
};
