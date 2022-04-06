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

const updateTodo = (todoState, todoObj, todoDispatch, id) => {
    const updatedTodoList = todoState.reduce((acc, curr) => {
        if (curr.id === id) return acc.concat({...curr, ...todoObj });
        else return acc.concat(curr);
    }, []);

    localStorage.setItem("todo", JSON.stringify(updatedTodoList));
    todoDispatch({ type: TODO_ACTION.UPDATE_TODO, payload: updatedTodoList });
};
const deleteTodo = (todoState, id, todoDispatch) => {
    const remainingTodoList = [...todoState.filter((prod) => prod.id !== id)];
    localStorage.setItem("todo", JSON.stringify(remainingTodoList));
    todoDispatch({ type: TODO_ACTION.DELETE_TODO, payload: remainingTodoList });
};
export { addTodo, updateTodo, deleteTodo };