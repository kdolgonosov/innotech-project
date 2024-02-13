import styles from './Quiz.module.css';
import { SectionLayout, Button, Checkbox } from 'shared/ui';
import OptionImg from '../../../assets/quiz-sneakers.jpg';

export const Quiz = () => {
    const options = [
        { title: 'sneakers', img: OptionImg },
        { title: 'sneakers', img: OptionImg },
        { title: 'sneakers', img: OptionImg },
        { title: 'sneakers', img: OptionImg },
        { title: 'sneakers', img: OptionImg },
        { title: 'sneakers', img: OptionImg },
    ];
    return (
        <section className={styles.quiz}>
            <SectionLayout>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>We will select the perfect product for you</h2>
                    <span className={styles.subtitle}>
                        Answer three questions and we will send you a catalog with the most suitable
                        products for you.
                    </span>
                    <div className={styles.question}>
                        <h3 className={styles.question_title}>
                            What type of product are you considering?
                        </h3>
                        <ul className={styles.question_option_list}>
                            {options.map((option, i) => (
                                <li key={i} className={styles.question_option_list_item}>
                                    <img
                                        src={option.img}
                                        alt={option.title}
                                        className={styles.question_option_list_item_img}
                                    />
                                    <Checkbox title={option.title} value={option.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.quiz_footer}>
                        <span className={styles.quiz_footer_count}>1 of 3</span>
                        <Button type='ghost' title='Next step' />
                    </div>
                </div>
            </SectionLayout>
        </section>
    );
};
