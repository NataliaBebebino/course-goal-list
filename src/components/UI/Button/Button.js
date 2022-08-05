import React from "react";

import styles from "./Button.module.css"; // we need to use the word styles and change the name of the CSS file adding the word module

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
