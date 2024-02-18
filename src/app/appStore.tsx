import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { categoryApi } from 'shared/model/api';
import { rootReducer } from './rootReducer';
import { productsApi } from 'entities/catalog/ProductList/model/api';
import { productApi } from 'widgets/ProductDetail/model/api';
import { setupListeners } from '@reduxjs/toolkit/query';

const appStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(categoryApi.middleware)
            .concat(productsApi.middleware)
            .concat(productApi.middleware),
});
setupListeners(appStore.dispatch);
export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default appStore;
