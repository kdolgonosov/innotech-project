import styles from './Quiz.module.css';
import { SectionLayout, Button, Checkbox, ProductCard } from 'shared/ui';
import { useGetAllCategoriesQuery, useLazyGetTopProductsByCategoryQuery } from 'shared/model/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, ChangeEvent } from 'react';
import { IProduct } from 'shared/model/interface';

export const Quiz = () => {
    const [step, setStep] = useState(1);
    const { data, error, isLoading, isFetching } = useGetAllCategoriesQuery();
    const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>, value: string) => {
        selectedCategory === null
            ? setSelectedCategory(value)
            : selectedCategory === value
            ? setSelectedCategory(null)
            : setSelectedCategory(value);
    };

    const [sendReq, result] = useLazyGetTopProductsByCategoryQuery();
    const goToNextStep = () => {
        setStep((prev) => (prev += 1));
        sendReq({ category: selectedCategory! });
    };
    const resetQuiz = () => {
        setSelectedCategory(null);
        setStep(1);
    };
    return (
        <section className={styles.quiz} id='quiz'>
            <SectionLayout>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        {step === 1
                            ? 'We will select the perfect product for you'
                            : 'Your selection is ready!'}
                    </h2>
                    {step === 1 && (
                        <span className={styles.subtitle}>
                            Answer three questions and we will send you a catalog with the most
                            suitable products for you.
                        </span>
                    )}

                    <div className={styles.question}>
                        {step === 1 ? (
                            <>
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
                                              <li
                                                  key={i}
                                                  className={styles.question_option_list_item}
                                              >
                                                  <Checkbox
                                                      title={option}
                                                      value={option}
                                                      onClick={handleCheckbox}
                                                      //   checked={selectedCategory === option}
                                                      disabled={
                                                          selectedCategory === null
                                                              ? false
                                                              : selectedCategory === option
                                                              ? false
                                                              : true
                                                      }
                                                  />
                                              </li>
                                          ))}
                                </ul>
                            </>
                        ) : (
                            <ul className={styles.result_wrapper}>
                                {result.isFetching || result.isLoading
                                    ? [...Array(3)].map((_, i) => (
                                          <li key={i}>
                                              <Skeleton height={360} width={280} />
                                              <Skeleton height={19} />
                                              <Skeleton height={29} />
                                          </li>
                                      ))
                                    : result.isSuccess &&
                                      result.data.map((product: IProduct, i: number) => (
                                          <ProductCard
                                              id={product.id}
                                              img={product.thumbnail}
                                              title={product.title}
                                              price={product.price}
                                              key={i}
                                          />
                                      ))}
                            </ul>
                        )}
                    </div>
                    <div className={styles.quiz_footer}>
                        <span className={styles.quiz_footer_count}>{step} of 2</span>
                        {step === 1 ? (
                            <Button
                                type='ghost'
                                title='Next step'
                                disabled={!selectedCategory}
                                onClick={goToNextStep}
                            />
                        ) : (
                            <Button
                                type='ghost'
                                title='Change selection'
                                disabled={!selectedCategory}
                                onClick={resetQuiz}
                            />
                        )}
                    </div>
                </div>
            </SectionLayout>
        </section>
    );
};
