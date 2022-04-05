import { v4 as uuidv4 } from "uuid";
import { TODO_ACTION } from "../stateIndex";
const addTodo = (todoList, todoObj, todoDispatch) => {
    const newTodo = {
        id: uuidv4(),
        addedData: new Date(),
        ...todoObj,
    };
    localStorage.setItem("todo", JSON.stringify(todoList.concat(newTodo)));
    todoDispatch({ type: TODO_ACTION.ADD_TODO, payload: [...todoList, newTodo] });
};

export { addTodo };