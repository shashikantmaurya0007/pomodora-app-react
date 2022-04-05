import React, { createContext, useContext, useEffect, useReducer } from "react";
import { TODO_ACTION } from "../stateIndex";

import { todoReducer } from "./todoReducer";
const todoContext = createContext();
const useTodo = () => useContext(todoContext);
const TodoProvider = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    todoDispatch({
      type: TODO_ACTION.ADD_TODO,
      payload: JSON.parse(localStorage.getItem("todo")) || [],
    });
  }, []);

  return (
    <todoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export { useTodo, TodoProvider };
