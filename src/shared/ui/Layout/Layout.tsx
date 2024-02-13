import styles from './Layout.module.css';

type Props = {
    children: React.ReactNode;
};

export const Layout = (props: Props) => {
    return <main className={styles.main}>{props.children}</main>;
};
