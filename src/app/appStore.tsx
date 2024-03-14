import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { rootReducer } from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from 'shared/model/api';

const appStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});
setupListeners(appStore.dispatch);
export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default appStore;
