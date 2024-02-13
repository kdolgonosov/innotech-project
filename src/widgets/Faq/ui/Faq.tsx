import { Accordion } from 'shared/ui';
import styles from './Faq.module.css';

export const Faq = () => {
    const faqs = [
        { question: 'Question 1', answer: 'Long answer to the first question' },
        { question: 'Question 2', answer: 'Long answer to the first question' },
    ];
    return (
        <section className={styles.faq}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>FAQ</h2>
                <ul className={styles.list}>
                    {faqs.map((faq, i) => (
                        <Accordion question={faq.question} answer={faq.answer} key={i} />
                    ))}
                </ul>
            </div>
        </section>
    );
};
