import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilterBar } from 'features/catalog/FilterBar';
import { renderWithProviders } from './utils/utils';
import { useGetAllCategoriesQuery } from 'shared/model/api';

jest.mock('shared/model/api', () => ({ useGetAllCategoriesQuery: jest.fn() }));
const mockedUseGetAllCategoriesQuery = useGetAllCategoriesQuery as jest.Mock;

describe('FilterBar component', () => {
    beforeEach(() => {
        mockedUseGetAllCategoriesQuery.mockReset();
    });

    test('renders skeleton on loading', () => {
        mockedUseGetAllCategoriesQuery.mockReturnValue({
            data: null,
            isLoading: true,
            isFetching: true,
            isError: false,
            error: null,
        });
        renderWithProviders(<FilterBar />);
        const skeletons = screen.getAllByTestId('skeleton');
        expect(skeletons).toHaveLength(20);
        skeletons.forEach((skeleton) => {
            expect(skeleton).toBeInTheDocument();
        });
    });

    test('renders error span on error', () => {
        mockedUseGetAllCategoriesQuery.mockReturnValue({
            data: null,
            isLoading: false,
            isFetching: false,
            isError: true,
            error: 'some error',
        });
        renderWithProviders(<FilterBar />);
        const errorSpan = screen.getByText(/error/i);
        expect(errorSpan).toBeInTheDocument();
    });

    test('renders category buttons with data', () => {
        const mockData = ['foo', 'bar'];
        mockedUseGetAllCategoriesQuery.mockReturnValue({
            data: mockData,
            isLoading: false,
            isFetching: false,
            isError: false,
            error: null,
        });
        renderWithProviders(<FilterBar />);
        const buttons = screen.getAllByTestId('category-button');
        expect(buttons).toHaveLength(2);
        buttons.forEach((button, i) => {
            expect(button).toHaveTextContent(mockData[i]);
        });
    });

    test('selected button has correct class and switching works correctly', () => {
        const mockData = ['foo', 'bar'];
        const selectedClassname = 'filter_categories_list_item_button_selected';
        mockedUseGetAllCategoriesQuery.mockReturnValue({
            data: mockData,
            isLoading: false,
            isFetching: false,
            isError: false,
            error: null,
        });
        renderWithProviders(<FilterBar />);
        const btns = [screen.getByText('foo'), screen.getByText('bar')];
        fireEvent.click(btns[0]);
        expect(btns[0]).toHaveClass(selectedClassname);
        expect(btns[1]).not.toHaveClass(selectedClassname);
        fireEvent.click(btns[1]);
        expect(btns[1]).toHaveClass(selectedClassname);
        expect(btns[0]).not.toHaveClass(selectedClassname);
    });

    test('"Apply" button disabled on loading', () => {
        mockedUseGetAllCategoriesQuery.mockReturnValue({
            data: null,
            isLoading: true,
            isFetching: true,
            isError: false,
            error: null,
        });
        renderWithProviders(<FilterBar />);
        const btn = screen.getByText(/apply/i);
        expect(btn).toBeDisabled();
    });

    test('"Reset" button disabled on loading', () => {
        mockedUseGetAllCategoriesQuery.mockReturnValue({
            data: null,
            isLoading: true,
            isFetching: true,
            isError: false,
            error: null,
        });
        renderWithProviders(<FilterBar />);
        const btn = screen.getByText(/reset/i);
        expect(btn).toBeDisabled();
    });

    test('selected category value correctly passed to store after clicking "Apply" button', () => {
        const mockData = ['foo', 'bar'];
        mockedUseGetAllCategoriesQuery.mockReturnValue({
            data: mockData,
            isLoading: false,
            isFetching: false,
            isError: false,
            error: null,
        });
        const { store } = renderWithProviders(<FilterBar />);
        fireEvent.click(screen.getByText('foo'));
        fireEvent.click(screen.getByText(/apply/i));
        expect(store.getState().filter.selectedCategory).toBe('foo');
    });

    test('selected category value correctly reseted in store after clicking "Reset" button', () => {
        const mockData = ['foo', 'bar'];
        const selectedClassname = 'filter_categories_list_item_button_selected';
        mockedUseGetAllCategoriesQuery.mockReturnValue({
            data: mockData,
            isLoading: false,
            isFetching: false,
            isError: false,
            error: null,
        });
        const { store } = renderWithProviders(<FilterBar />);
        const btn = screen.getByText('foo');
        fireEvent.click(btn);
        fireEvent.click(screen.getByText(/reset/i));
        expect(store.getState().filter.selectedCategory).toBe('');
        expect(btn).not.toHaveClass(selectedClassname);
    });
});
