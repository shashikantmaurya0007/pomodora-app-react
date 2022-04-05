import { TODO_ACTION } from "./todoAction";

const todoReducer = (prevstate, { type, payload }) => {
    switch (type) {
        case TODO_ACTION.ADD_TODO:
            {
                return [...payload];
            }
        case TODO_ACTION.DELETE_TODO:
            {
                return [...payload];
            }

        case TODO_ACTION.UPDATE_TODO:
            {
                return [...payload];
            }
        default:
            {
                return prevstate;
            }
    }
};

export { todoReducer };