import { Intro } from 'widgets/Intro';
import { Catalog } from 'widgets/Catalog';
import { AboutUs } from 'widgets/AboutUs';
import { Quiz } from 'widgets/Quiz';
import { OurTeam } from 'widgets/OurTeam';
import { Faq } from 'widgets/Faq';

export const MainPage = () => {
    return (
        <>
            <Intro />
            <Catalog title='Catalog' filterBar={true} searchBar={false} />
            <AboutUs />
            <Quiz />
            <OurTeam />
            <Faq />
        </>
    );
};
