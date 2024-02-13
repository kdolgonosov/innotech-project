import styles from './Footer.module.css';
import { NavBar } from 'entities/navbar';
import { NavLogo } from 'shared/ui';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <NavLogo />
                <NavBar type='footer' />
            </div>
        </footer>
    );
};
