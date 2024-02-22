import styles from './Checkbox.module.css';
import { MouseEvent } from 'react';

type Props = {
  title: string;
  onClick: (e: MouseEvent<any>, value: string) => void;
  value: string;
  checked?: boolean;
  disabled?: boolean;
};

export const Checkbox = (props: Props) => {
  return (
    <div
      className={styles.wrapper}
      onClick={(e) => props.onClick(e, props.value)}
    >
      <input
        type='checkbox'
        name={props.title}
        id={props.title}
        value={props.value}
        className={styles.checkbox}
        checked={props.checked}
        disabled={props.disabled}
      />
      <label
        htmlFor={props.title}
        onClick={(e) => {
          e.preventDefault();
          props.onClick(e, props.value);
        }}
        // onClick={(e) => e.preventDefault()}
        className={styles.label}
      >
        {props.title}
      </label>
    </div>
  );
};
