import styles from './FilterBar.module.css';
import { Button } from 'shared/ui';
const categories = [
    'smartphones',
    'laptops',
    'sneakers',
    'sneakers',
    'sneakers',
    'sneakers',
    'sneakers',
    'sneakers',
];
export const FilterBar = () => {
    return (
        <aside className={styles.filter}>
            <h3 className={styles.filter_title}>Selection by&nbsp;parameters</h3>
            <span className={styles.filter_categories_title}>Category</span>
            <ul className={styles.filter_categories_list}>
                {categories.map((cat, i) => (
                    <li className={styles.filter_categories_list_item} key={i}>
                        <button className={styles.filter_categories_list_item_button}>{cat}</button>
                    </li>
                ))}
            </ul>
            <Button type='gray' title='Apply' addStyle={{ margin: '32px 0 35px' }} />
            <Button type='clear' title='Reset' />
        </aside>
    );
};
