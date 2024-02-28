import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from './utils/utils';
import { useGetProductsQuery } from 'shared/model/api';
import { ProductList } from 'entities/catalog/ProductList';

jest.mock('shared/model/api', () => ({ useGetProductsQuery: jest.fn() }));
const mockedUseGetProductsQuery = useGetProductsQuery as jest.Mock;
const products = [
    {
        id: 1,
        title: 'iPhone 9',
        price: 549,
        thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    },
    {
        id: 2,
        title: 'iPhone X',
        price: 899,
        thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
    },
    {
        id: 3,
        title: 'Samsung Universe 9',
        price: 1249,
        thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg',
    },
    {
        id: 4,
        title: 'OPPOF19',
        price: 280,
        thumbnail: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg',
    },
    {
        id: 5,
        title: 'Huawei P30',
        price: 499,
        thumbnail: 'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg',
    },
    {
        id: 6,
        title: 'MacBook Pro',
        price: 1749,
        thumbnail: 'https://cdn.dummyjson.com/product-images/6/thumbnail.png',
    },
    {
        id: 7,
        title: 'Samsung Galaxy Book',
        price: 1499,
        thumbnail: 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg',
    },
    {
        id: 8,
        title: 'Microsoft Surface Laptop 4',
        price: 1499,
        thumbnail: 'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg',
    },
    {
        id: 9,
        title: 'Infinix INBOOK',
        price: 1099,
        thumbnail: 'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg',
    },
];
describe('ProductList component', () => {
    beforeEach(() => {
        mockedUseGetProductsQuery.mockReset();
    });

    test('renders skeleton on loading', () => {
        mockedUseGetProductsQuery.mockReturnValue({
            data: null,
            isLoading: true,
            isFetching: true,
            error: false,
        });
        renderWithProviders(<ProductList />);
        const skeletons = screen.getAllByTestId('skeleton');
        expect(skeletons).toHaveLength(27);
        skeletons.forEach((skeleton) => {
            expect(skeleton).toBeInTheDocument();
        });
    });

    test('renders error span on error', () => {
        mockedUseGetProductsQuery.mockReturnValue({
            data: null,
            isLoading: false,
            isFetching: false,
            error: true,
        });
        renderWithProviders(<ProductList />);
        const errorSpan = screen.getByText(/error/i);
        expect(errorSpan).toBeInTheDocument();
    });

    test('renders products with data', () => {
        mockedUseGetProductsQuery.mockReturnValue({
            data: {
                products,
                limit: 9,
                skip: 0,
                total: 100,
            },
            isLoading: false,
            isFetching: false,
            error: false,
        });
        renderWithProviders(<ProductList />);
        const productCards = screen.getAllByTestId('product-card');
        expect(productCards).toHaveLength(9);
        productCards.forEach((card) => {
            expect(card).toBeInTheDocument();
        });
    });
    test('load more button increments page in store', () => {
        mockedUseGetProductsQuery.mockReturnValue({
            data: {
                products,
                limit: 9,
                skip: 0,
                total: 100,
            },
            isLoading: false,
            isFetching: false,
            error: false,
        });
        const { store } = renderWithProviders(<ProductList />);
        const loadMoreBtn = screen.getByRole('button');
        expect(loadMoreBtn).not.toBeDisabled();
        fireEvent.click(loadMoreBtn);
        expect(store.getState().productPage.page).toBe(2);
        fireEvent.click(loadMoreBtn);
        expect(store.getState().productPage.page).toBe(3);
    });
});
