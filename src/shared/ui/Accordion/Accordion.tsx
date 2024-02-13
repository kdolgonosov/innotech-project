import { useState } from 'react';
import styles from './Accordion.module.css';

type Props = {
    question: string;
    answer: string;
};

export const Accordion = (props: Props) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <li className={styles.item}>
            <div className={styles.header}>
                <h3 className={styles.question}>{props.question}</h3>
                <button
                    className={`${styles.button}` + ' ' + `${isOpened && styles.button_opened}`}
                    onClick={() => setIsOpened(!isOpened)}
                ></button>
            </div>
            <p className={`${styles.answer}` + ' ' + `${isOpened && styles.answer_opened}`}>
                {props.answer}
            </p>
        </li>
    );
};
