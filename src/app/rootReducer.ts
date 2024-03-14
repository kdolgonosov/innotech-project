import { combineReducers } from '@reduxjs/toolkit';
import { filterSlice } from 'features/catalog/FilterBar/model/slice';
import { searchStringSlice } from 'features/catalog/SearchBar/model/slice';
import { productPageSlice } from 'entities/catalog/ProductList/model/slice';
import { categoryApi } from 'shared/model/api';
import { productsApi } from 'entities/catalog/ProductList/model/api';
import { productApi } from 'widgets/ProductDetail/model/api';

export const rootReducer = combineReducers({
    [filterSlice.name]: filterSlice.reducer,
    [searchStringSlice.name]: searchStringSlice.reducer,
    [productPageSlice.name]: productPageSlice.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
