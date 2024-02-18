import React from 'react';
import styles from './OurTeam.module.css';
import { SectionLayout } from 'shared/ui';
import Team1 from '../../../assets/team-1.jpg';
import Team2 from '../../../assets/team-2.jpg';
import Team3 from '../../../assets/team-3.jpg';
import Team4 from '../../../assets/team-4.jpg';
import Team5 from '../../../assets/team-5.jpg';
import Team6 from '../../../assets/team-6.jpg';
type Props = {};

export const OurTeam = (props: Props) => {
    return (
        <section className={styles.ourteam} id='our-team'>
            <SectionLayout>
                <h2 className={styles.title}>Our team</h2>
                <div className={styles.ourteam_decor}></div>
                <ul className={styles.grid}>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team1}
                            alt='Team member'
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                            loading='lazy'
                            decoding='async'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team2}
                            alt='Team member'
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                            loading='lazy'
                            decoding='async'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team3}
                            alt='Team member'
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                            loading='lazy'
                            decoding='async'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team4}
                            alt='Team member'
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                            loading='lazy'
                            decoding='async'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team5}
                            alt='Team member'
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                            loading='lazy'
                            decoding='async'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team6}
                            alt='Team member'
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                            loading='lazy'
                            decoding='async'
                        />
                    </li>
                </ul>
            </SectionLayout>
        </section>
    );
};

export default OurTeam;
