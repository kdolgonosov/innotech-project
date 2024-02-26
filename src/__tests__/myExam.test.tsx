// import
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterBar } from 'features/catalog/FilterBar';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
describe('Something big', () => {
    const mockStore = configureStore([]);
    test('asd', () => {
        const store = mockStore({
            yourReducer: {
                data: 'Mocked data',
            },
        });
        render(
            <Provider store={store}>
                <FilterBar />
            </Provider>,
        );
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();
    });
});
