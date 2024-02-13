import { useState } from 'react';
import styles from './Faq.module.css';

export const Faq = () => {
    const [faqsOpened, setFaqsOpened] = useState([false, false]);

    const faqs = [
        { question: 'Question 1', answer: 'Long answer to the first question' },
        { question: 'Question 2', answer: 'Long answer to the first question' },
    ];

    const handleOpenFaq: any = (id: number) => {
        setFaqsOpened((prev) => prev.map((faq, i) => (i === id ? !faq : faq)));
    };
    return (
        <section className={styles.faq}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>FAQ</h2>
                <ul className={styles.list}>
                    {faqs.map((faq, i) => (
                        <li className={styles.list_item} key={i}>
                            <div className={styles.list_item_header}>
                                <h3 className={styles.question}>{faq.question}</h3>
                                <button
                                    className={
                                        `${styles.button}` +
                                        ' ' +
                                        `${faqsOpened[i] && styles.button_opened}`
                                    }
                                    onClick={() => handleOpenFaq(i)}
                                ></button>
                            </div>
                            <p
                                className={
                                    `${styles.answer}` +
                                    ' ' +
                                    `${faqsOpened[i] && styles.answer_opened}`
                                }
                            >
                                {faq.answer}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
