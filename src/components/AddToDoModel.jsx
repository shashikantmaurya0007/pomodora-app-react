import React, { useEffect, useState } from "react";

import styles from "../styles/Model.module.css";
import { ImCross } from "react-icons/im";
import { useTheme, addTodo, useTodo, updateTodo } from "../state/stateIndex";
const AddToDoModel = ({
  showModel,
  setShowModel,
  editIsEnabled,
  setEditIsEnabled,
  idToBeEdited,
}) => {
  const { theme } = useTheme();
  const initalState = {
    title: "",
    description: "",
    timeDuration: "",
  };

  const { todoState, todoDispatch } = useTodo();

  const [todoObj, setTodo] = useState(initalState);
  const addFormDataToTodo = () => {
    if (
      todoObj.title.trim() &&
      todoObj.description.trim() &&
      todoObj.timeDuration
    ) {
      addTodo(todoState, todoObj, todoDispatch);

      setShowModel((prev) => !prev);
      setTodo((prev) => initalState);
    }
  };
  const addEditedDataToTodo = () => {
    if (
      todoObj.title.trim() &&
      todoObj.description.trim() &&
      todoObj.timeDuration
    ) {
      updateTodo(todoState, todoObj, todoDispatch, idToBeEdited);

      setShowModel((prev) => false);
      setEditIsEnabled((prev) => false);
      setTodo((prev) => initalState);
    }
  };
  const closeModel = () => {
    setShowModel((prev) => !prev);
    setTodo((prev) => initalState);
    setEditIsEnabled((prev) => false);
  };
  useEffect(() => {
    if (editIsEnabled) {
      const { title, description, timeDuration } = todoState.find(
        (ele) => ele.id === idToBeEdited
      );
      setTodo((prev) => {
        return {
          ...prev,
          title: title,
          description: description,
          timeDuration: timeDuration,
        };
      });
    }
  }, [editIsEnabled, todoState, idToBeEdited]);
  if (!showModel) return null;
  return (
    <div className={`${styles.model} `}>
      <div
        className={`${theme === "dark" ? "dark" : "light"} ${
          styles.model_content
        }  `}
      >
        <div onClick={closeModel} className={styles.model_crossbtn_container}>
          <ImCross className={styles.model_cross_btn} />
        </div>
        <form className={styles.todo_form_}>
          <input
            className={styles.todo_form_input}
            type="text"
            value={todoObj.title}
            placeholder="Add Title"
            onChange={(e) =>
              setTodo((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
          <textarea
            className={`${styles.todo_form_input} ${styles.todo_form_desc}`}
            type="text"
            value={todoObj.description}
            placeholder="Add  Description"
            onChange={(e) =>
              setTodo((prev) => {
                return { ...prev, description: e.target.value };
              })
            }
          />
          <input
            className={styles.todo_form_input}
            type="number"
            placeholder="Add Time"
            min={2}
            required
            value={todoObj.timeDuration}
            onChange={(e) =>
              setTodo((prev) => {
                return { ...prev, timeDuration: e.target.value };
              })
            }
          />
        </form>
        <div className={styles.btn_container}>
          <button
            onClick={closeModel}
            className={`${styles.primary_btn} ${styles.btn}`}
          >
            Cancel
          </button>
          {editIsEnabled ? (
            <button
              onClick={addEditedDataToTodo}
              className={`${styles.secondary_btn} ${styles.btn}`}
            >
              update
            </button>
          ) : (
            <button
              onClick={addFormDataToTodo}
              className={`${styles.secondary_btn} ${styles.btn}`}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { AddToDoModel };
