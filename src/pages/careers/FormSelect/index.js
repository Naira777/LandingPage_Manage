import React from "react";
import styles from "./index.module.scss";

const FormSelect = ({
  options,
  defaultValue,
  handleChange,
  label,
  ...otherProps
}) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className={styles.formRow}>
      {label && <label>{label}</label>}

      <select
        className="formselect"
        value={defaultValue}
        onChange={handleChange}
        {...otherProps}
      >
        {options.map((option, index) => {
          const { title, id } = option;

          return (
            <option key={index} value={id}>
              {title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
