import styles from './NavBar.module.css';
import { MouseEventHandler } from 'react';
import { NavLink } from 'shared/ui';
import { CartButton } from 'features/cart/CartButton';
import { useState } from 'react';

type Props = {
    type: 'header' | 'footer';
};
const navLinks = [
    { title: 'Catalog', link: '#' },
    { title: 'About us', link: '#' },
    { title: 'Product selection', link: '#' },
    { title: 'Our team', link: '#' },
    { title: 'Shipping and payment', link: '#' },
    { title: 'Contacts', link: '#' },
];
export const NavBar = (props: Props) => {
    const [isMobMenuOpened, setIsMobMenuOpened] = useState(false);
    const handleOpenMobMenu: MouseEventHandler<HTMLButtonElement> = () => {
        setIsMobMenuOpened((prev) => !prev);
    };
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
                    {navLinks.map((navLink, i) => (
                        <NavLink title={navLink.title} link={navLink.link} key={i} />
                    ))}
                    {props.type === 'header' && (
                        <div className={styles.cart}>
                            <NavLink title='Cart' link='#' />
                            <CartButton count={1} />
                        </div>
                    )}
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
