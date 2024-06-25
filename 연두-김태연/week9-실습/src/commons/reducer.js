import { ADD, DELETE } from "./actions";

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      todos: [...state.todos, action.todo],
    };
  } else if (action.type === DELETE) {
    return {
      todos: [...state.todos.filter((todo) => todo.id !== action.id)],
    };
  } else {
    return state;
  }
};