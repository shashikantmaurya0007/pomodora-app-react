import React, { useState } from "react";
import { AddToDoModel } from "./componentIndex";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../styles/ToDoListTable.module.css";
const ToDoListTable = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <div className={styles.todolist_box}>
        <div className={styles.todolist_title_add_btn}>
          <h1>To-Do List</h1>
          <button
            onClick={() => setShowModel((prev) => !prev)}
            className={`${styles.btn} ${styles.secondary_btn}`}
          >
            <AiOutlinePlusCircle className={styles.btn_size} />
          </button>
        </div>
      </div>

      <AddToDoModel showModel={showModel} />
    </div>
  );
};

export { ToDoListTable };
