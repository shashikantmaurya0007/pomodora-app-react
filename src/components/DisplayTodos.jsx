import React from "react";
import { useTheme, useTodo, deleteTodo } from "../state/stateIndex";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import styles from "../styles/DisplayTodos.module.css";
import { useNavigate } from "react-router-dom";
const DisplayTodos = ({ enableEdit }) => {
  const { todoState, todoDispatch } = useTodo();
  const { theme } = useTheme();
  const navigate = useNavigate();
  console.log(todoState);
  return (
    <div className={`${styles.display_todo_container} `}>
      {todoState.map((ele, index) => {
        console.log(ele.title, index);
        return (
          <div
            onClick={() => navigate(`/todo/${ele.id}`)}
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
                onClick={(e) => {
                  enableEdit(ele.id);
                  e.stopPropagation();
                }}
              />
              <MdDeleteForever
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(todoState, ele.id, todoDispatch);
                }}
                className={styles.btn}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { DisplayTodos };
