import styles from './Quiz.module.css';
import { SectionLayout, Button, Checkbox } from 'shared/ui';
import { useGetAllCategoriesQuery } from 'shared/model/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Quiz = () => {
    const { data, error, isLoading, isFetching } = useGetAllCategoriesQuery();
    return (
        <section className={styles.quiz} id='quiz'>
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
                            {isLoading || isFetching
                                ? [...Array(20)].map((_, i) => (
                                      <Skeleton key={i} width={192} height={24} />
                                  ))
                                : !error &&
                                  data.map((option: string, i: number) => (
                                      <li key={i} className={styles.question_option_list_item}>
                                          <Checkbox title={option} value={option} />
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
