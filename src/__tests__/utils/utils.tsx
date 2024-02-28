import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import type { RootState } from 'app/rootReducer';
import { filterSlice } from 'features/catalog/FilterBar/model/slice';
import { searchStringSlice } from 'features/catalog/SearchBar/model/slice';
import { productPageSlice } from 'entities/catalog/ProductList/model/slice';

const rootReducerWithoutApi = combineReducers({
    [filterSlice.name]: filterSlice.reducer,
    [searchStringSlice.name]: searchStringSlice.reducer,
    [productPageSlice.name]: productPageSlice.reducer,
});
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: typeof appStore;
}
const appStore = configureStore({
    reducer: rootReducerWithoutApi,
    preloadedState: {},
});
export function renderWithProviders(
    ui: React.ReactElement,
    { preloadedState = {}, store = appStore, ...renderOptions }: ExtendedRenderOptions = {},
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
