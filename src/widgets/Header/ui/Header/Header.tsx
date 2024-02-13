import styles from './Header.module.css';
import { NavBar } from 'entities/navbar';
import { NavLogo } from 'shared/ui';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <NavLogo />
                <NavBar type='header' />
            </div>
        </header>
    );
};
