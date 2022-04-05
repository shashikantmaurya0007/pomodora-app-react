import React, { useState } from "react";
import { AddToDoModel } from "./componentIndex";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../styles/ToDoListTable.module.css";
import { DisplayTodos } from "./componentIndex";
import { useTheme } from "../state/stateIndex";
const ToDoListTable = () => {
  const [showModel, setShowModel] = useState(false);
  const [editIsEnabled, setEditIsEnabled] = useState(false);
  const [idToBeEdited, setIdToBeEdited] = useState(null);
  const { theme } = useTheme();
  const enableEdit = (id) => {
    setIdToBeEdited((prev) => id);
    setEditIsEnabled((prev) => true);
    setShowModel((prev) => true);
  };

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
        <DisplayTodos enableEdit={enableEdit} />
      </div>

      <AddToDoModel
        showModel={showModel}
        setShowModel={setShowModel}
        editIsEnabled={editIsEnabled}
        setEditIsEnabled={setEditIsEnabled}
        idToBeEdited={idToBeEdited}
      />
    </div>
  );
};

export { ToDoListTable };
