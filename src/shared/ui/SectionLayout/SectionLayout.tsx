import { ReactNode } from 'react';
import styles from './SectionLayout.module.css';
type Props = {
    children: ReactNode;
};

export const SectionLayout = (props: Props) => {
    return <div className={styles.wrapper}>{props.children}</div>;
};
