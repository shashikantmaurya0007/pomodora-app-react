import React from "react";
import { useTodo } from "../state/stateIndex";
const DisplayTodos = () => {
  const { todoState } = useTodo();
  console.log(todoState);
  return <div>DisplayTodos</div>;
};

export { DisplayTodos };
