import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {complete, deleteTodo} from "../redux/todoSlice.js";


const TodoList = () => {
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();

  console.log(todoList);
  return (
    <>
      <ul>
        {todoList.map((todo, idx) => (
          <li key={todoList[idx].id}>
            <input type="checkbox" onChange={() => dispatch(complete(todoList[idx].id))}/>
            <div>{todo.complete === false ? <p>{todo.text}</p> : <del>{todo.text}</del>}</div>
            <button type="button" onClick={() => dispatch(deleteTodo(todoList[idx].id))}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
