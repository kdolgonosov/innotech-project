import styles from './Intro.module.css';
import { Button } from 'shared/ui';
import { SectionLayout } from 'shared/ui';

export const Intro = () => {
    return (
        <section className={styles.intro}>
            <SectionLayout>
                <h1 className={styles.intro_title}>
                    Any products from famous brands with worldwide delivery
                </h1>
                <p className={styles.intro_subtitle}>
                    We sell smartphones, laptops, clothes, shoes
                    and&nbsp;many&nbsp;other&nbsp;products&nbsp;at&nbsp;low&nbsp;prices
                </p>
                <Button type='accent' title='Go to shopping' addStyle={{ marginLeft: '14.5px' }} />
                <span className={styles.intro_decor}>Goods4you</span>
            </SectionLayout>
        </section>
    );
};
