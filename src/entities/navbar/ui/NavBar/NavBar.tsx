import styles from './NavBar.module.css';
import { MouseEventHandler } from 'react';
import { NavLink } from 'shared/ui';
import { useState } from 'react';

type Props = {
    type: 'header' | 'footer';
};
const navLinks = [
    { title: 'Catalog', link: '#catalog' },
    { title: 'About us', link: '#about-us' },
    { title: 'Product selection', link: '#quiz' },
    { title: 'Our team', link: '#our-team' },
    { title: 'FAQ', link: '#faq' },
];
export const NavBar = (props: Props) => {
    const [isMobMenuOpened, setIsMobMenuOpened] = useState(false);
    const handleOpenMobMenu: MouseEventHandler<HTMLButtonElement> = () => {
        setIsMobMenuOpened((prev) => !prev);
    };
    const location = window.location.pathname;
    return (
        <>
            <nav className={styles.nav}>
                {props.type === 'header' && (
                    <button className={styles.burgerBtn} onClick={handleOpenMobMenu}></button>
                )}
                <ul
                    className={
                        `${styles.nav_list}` +
                        ' ' +
                        `${
                            props.type === 'header'
                                ? `${styles.nav_list_type_header}`
                                : `${styles.nav_list_type_footer}`
                        }`
                    }
                >
                    {location === '/' &&
                        navLinks.map((navLink, i) => (
                            <NavLink title={navLink.title} link={navLink.link} key={i} />
                        ))}
                    {props.type === 'header' &&
                        (location === '/' ? (
                            <NavLink title='For staff' link='/products' />
                        ) : (
                            <NavLink title='Back to site' link='/' />
                        ))}
                </ul>
            </nav>
            {isMobMenuOpened && (
                <ul className={styles.nav_list_type_header_mob}>
                    {navLinks.map((navLink, i) => (
                        <NavLink title={navLink.title} link={navLink.link} key={i} />
                    ))}
                </ul>
            )}
        </>
    );
};
