import styles from './OurTeam.module.css';
import { SectionLayout } from 'shared/ui';
import Team1 from '../../../assets/team-1.jpg';
import Team2 from '../../../assets/team-2.jpg';
import Team3 from '../../../assets/team-3.jpg';
import Team4 from '../../../assets/team-4.jpg';
import Team5 from '../../../assets/team-5.jpg';
import Team6 from '../../../assets/team-6.jpg';

export const OurTeam = () => {
    const images = [Team1, Team2, Team3, Team4, Team5, Team6];
    return (
        <section className={styles.ourteam} id='our-team'>
            <SectionLayout>
                <h2 className={styles.title}>Our team</h2>
                <div className={styles.ourteam_decor}></div>
                <ul className={styles.grid}>
                    {images.map((item, i) => (
                        <li className={styles.grid_item} key={i}>
                            <div className={styles.grid_item_span_container}>
                                <span className={styles.grid_item_item_span_name}>Maxim</span>
                                <span className={styles.grid_item_item_span_post}>
                                    Administrator
                                </span>
                            </div>
                            <img
                                src={item}
                                alt='Team member'
                                className={styles.grid_item_img}
                                width='380'
                                height='400'
                                loading='lazy'
                                decoding='async'
                            />
                        </li>
                    ))}
                </ul>
            </SectionLayout>
        </section>
    );
};

export default OurTeam;
