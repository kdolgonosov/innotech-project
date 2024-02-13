import styles from './NavLink.module.css';
type Props = {
    title: string;
    link: string;
    idForKey?: number;
};

export const NavLink = (props: Props) => {
    return (
        <li className={styles.nav_list_item} key={props?.idForKey}>
            <a href={props.link} className={styles.nav_list_item_link}>
                {props.title}
            </a>
        </li>
    );
};
