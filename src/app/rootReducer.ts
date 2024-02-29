import { combineReducers } from '@reduxjs/toolkit';
import { filterSlice } from 'features/catalog/FilterBar/model/slice';
import { searchStringSlice } from 'features/catalog/SearchBar/model/slice';
import { productPageSlice } from 'entities/catalog/ProductList/model/slice';
import { productsApi } from 'shared/model/api';

export const rootReducer = combineReducers({
  [filterSlice.name]: filterSlice.reducer,
  [searchStringSlice.name]: searchStringSlice.reducer,
  [productPageSlice.name]: productPageSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
