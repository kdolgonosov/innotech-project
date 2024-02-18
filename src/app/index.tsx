import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './appStore';
import { appRouter } from './appRouter';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';

export const App = () => {
    return (
        <>
            <Header />
            <Provider store={appStore}>
                <RouterProvider router={appRouter()} />
            </Provider>
            <Footer />
        </>
    );
};
