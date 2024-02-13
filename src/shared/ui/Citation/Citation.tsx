import React from 'react';
import styles from './Citation.module.css';
type Props = {};

export const Citation = (props: Props) => {
    return (
        <figure className={styles.figure}>
            <blockquote className={styles.blockquote}>
                <p className={styles.text}>
                    Every day a person has a choice what to spend his money on. Stores and websites
                    offer an endless list of products.
                </p>
                <p className={styles.text}>But we will help you make the right choice!</p>
            </blockquote>
            <figcaption className={styles.figcaption}>
                <span className={styles.figcaption_dash}>&mdash;</span>&nbsp;&nbsp;Goods4you
            </figcaption>
        </figure>
    );
};
