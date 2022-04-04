import React from "react";

import styles from "../styles/Model.module.css";
import { ImCross } from "react-icons/im";
import { useTheme } from "../state/stateIndex";
const AddToDoModel = ({ showModel }) => {
  const { theme } = useTheme();
  if (!showModel) return null;
  return (
    <div className={`${styles.model} `}>
      <div
        className={`${theme == "dark" ? "dark" : "light"} ${
          styles.model_content
        }  `}
      >
        <div className={styles.model_crossbtn_container}>
          <ImCross className={styles.model_cross_btn} />
        </div>
        <form className={styles.todo_form_}>
          <input
            className={styles.todo_form_input}
            type="text"
            placeholder="Add Title"
          />
          <textarea
            className={`${styles.todo_form_input} ${styles.todo_form_desc}`}
            type="text"
            placeholder="Add  Description"
          />
          <input
            className={styles.todo_form_input}
            type="number"
            placeholder="Add Time"
          />
        </form>
        <div className={styles.btn_container}>
          <button className={`${styles.primary_btn} ${styles.btn}`}>
            Cancel
          </button>
          <button className={`${styles.secondary_btn} ${styles.btn}`}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export { AddToDoModel };
