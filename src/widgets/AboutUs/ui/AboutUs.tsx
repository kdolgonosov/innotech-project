import styles from './AboutUs.module.css';
import { SectionLayout } from 'shared/ui';
import { Citation } from 'shared/ui';

export const AboutUs = () => {
    return (
        <section className={styles.aboutus}>
            <SectionLayout>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>About us</h2>
                    <Citation />
                    <div className={styles.bgImg}></div>
                    <div className={styles.decor}></div>
                </div>
            </SectionLayout>
        </section>
    );
};
