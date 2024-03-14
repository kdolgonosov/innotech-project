import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from 'pages/main';
import { ProductsPage } from 'pages/products';
import { ProductPage } from 'pages/product';

export const appRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <MainPage />,
            errorElement: <div>Error</div>,
        },
        {
            path: 'products',
            element: <ProductsPage />,
        },
        {
            path: 'products/:productId',
            element: <ProductPage />,
        },
    ]);
