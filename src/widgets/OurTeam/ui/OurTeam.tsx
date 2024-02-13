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
        <section className={styles.ourteam}>
            <SectionLayout>
                <div className={styles.ourteam_decor}></div>
                <h2 className={styles.title}>Our team</h2>
                <ul className={styles.grid}>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team1}
                            alt=''
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team2}
                            alt=''
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team3}
                            alt=''
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team4}
                            alt=''
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team5}
                            alt=''
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                        />
                    </li>
                    <li className={styles.grid_item}>
                        <div className={styles.grid_item_span_container}>
                            <span className={styles.grid_item_item_span_name}>Maxim</span>
                            <span className={styles.grid_item_item_span_post}>Administrator</span>
                        </div>
                        <img
                            src={Team6}
                            alt=''
                            className={styles.grid_item_img}
                            width='380'
                            height='400'
                        />
                    </li>
                </ul>
            </SectionLayout>
        </section>
    );
};

export default OurTeam;
