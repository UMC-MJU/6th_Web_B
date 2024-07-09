import {useDispatch, useSelector} from "react-redux";
import {complete, deleteTodo} from "../redux/todoSlice.js";

export const useTodos = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo);

  const completeTodo = (id) => {
    dispatch(complete(id));
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return {todoList, completeTodo, removeTodo};
}
