import React from 'react';
import clsx from 'clsx';
import { useController } from 'react-hook-form';

import styles from './text-input.module.scss';

const TextInput = ({ className, type, placeholder, name, control, onChange }) => {
  const {
    field,
  } = useController({ control, name });

  return (
    <div className={styles.text_input}>
      <input
        className={clsx(className, styles.input)}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        {...field}
      />
    </div>
  );
};

export default TextInput;
