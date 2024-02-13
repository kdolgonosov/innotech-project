import './index.css';
import { MainPage } from 'pages/main';
// import { Layout } from 'shared/ui';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';

export const App = () => {
    return (
        <>
            <Header />
            {/* <Layout> */}
            <MainPage />
            {/* </Layout> */}
            <Footer />
        </>
    );
};
