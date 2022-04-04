import React, { createContext, useContext, useReducer } from "react";

const todoContext = createContext();
import { todoReducer } from "./todoReducer";
const useTodo = useContext(todoContext);
const TodoProvider = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, []);
  return (
    <todoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export { useTodo, TodoProvider };
