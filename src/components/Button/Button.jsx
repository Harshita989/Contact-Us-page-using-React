import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  const { isoutline, text, icon ,...rest} = props;
  return (
    <button {...rest}
      className={`${isoutline ? styles.outline_btn : styles.primary_btn}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
