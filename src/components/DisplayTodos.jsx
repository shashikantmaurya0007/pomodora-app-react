import React from "react";
import { useTheme, useTodo } from "../state/stateIndex";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import styles from "../styles/DisplayTodos.module.css";
const DisplayTodos = ({ enableEdit }) => {
  const { todoState } = useTodo();
  const { theme } = useTheme();
  console.log(todoState);
  return (
    <div className={`${styles.display_todo_container} `}>
      {todoState.map((ele, index) => {
        console.log(ele.title, index);
        return (
          <div
            key={ele.id}
            className={`${styles.individual_todo} ${
              theme === "dark" ? styles.dark : styles.light
            }`}
          >
            <p>
              {ele.title.trim().length > 20
                ? ele.title.trim().slice(0, 20) + "..."
                : ele.title.trim()}
            </p>

            <div className={styles.btn_container}>
              <FaEdit
                className={styles.btn}
                onClick={() => enableEdit(ele.id)}
              />
              <MdDeleteForever className={styles.btn} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { DisplayTodos };
