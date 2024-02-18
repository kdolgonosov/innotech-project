import { useState, MouseEvent, KeyboardEvent, ChangeEvent } from 'react';
import { useAppDispatch } from 'shared/model/hooks';
import styles from './SearchBar.module.css';
import { Button } from 'shared/ui';
import { setSearchString } from '../model/slice';
import { useDebouncedCallback } from 'use-debounce';
import { resetPage } from 'entities/catalog/ProductList/model/slice';

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    // Паттерн: декоратор
    const debounced = useDebouncedCallback((value) => {
        dispatch(resetPage());
        dispatch(setSearchString(value));
    }, 700);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const handleSearchByKeyboard = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(resetPage());
            dispatch(setSearchString(inputValue));
        }
        debounced(inputValue);
    };
    const handleSearchByButton = (e: MouseEvent<HTMLButtonElement>) => {
        debounced.cancel();
        dispatch(resetPage());
        dispatch(setSearchString(inputValue));
    };
    return (
        <div className={styles.searchBar}>
            <input
                type='text'
                className={styles.input}
                placeholder='Search by title'
                value={inputValue}
                onChange={handleChange}
                onKeyUp={(e) => handleSearchByKeyboard(e)}
            />
            <Button type='accent' title='Search' onClick={(e) => handleSearchByButton(e)} />
        </div>
    );
};
