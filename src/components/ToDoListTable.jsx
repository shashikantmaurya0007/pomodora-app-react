import React, { useState } from "react";
import { AddToDoModel } from "./componentIndex";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../styles/ToDoListTable.module.css";
import { DisplayTodos } from "./componentIndex";
import { useTheme } from "../state/stateIndex";
const ToDoListTable = () => {
  const [showModel, setShowModel] = useState(false);
  const { theme } = useTheme();
  return (
    <div>
      <div
        className={`${styles.todolist_box} ${
          theme === "dark" && styles.todo_container_dark_theme
        }`}
      >
        <div className={styles.todolist_title_add_btn}>
          <h1>To-Do List</h1>
          <button
            onClick={() => setShowModel((prev) => !prev)}
            className={`${styles.btn} ${styles.secondary_btn}`}
          >
            <AiOutlinePlusCircle className={styles.btn_size} />
          </button>
        </div>
        <DisplayTodos />
      </div>

      <AddToDoModel showModel={showModel} setShowModel={setShowModel} />
    </div>
  );
};

export { ToDoListTable };
