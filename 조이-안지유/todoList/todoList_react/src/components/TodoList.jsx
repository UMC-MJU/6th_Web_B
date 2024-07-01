import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {complete, deleteTodo} from "../redux/todoSlice.js";
import styled from "styled-components";


const TodoList = () => {
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();

  return (
    <TodoContainer>
      <ul style={{margin: "0", padding: "0"}}>
        <Todos>
          {todoList.map((todo, idx) => (
            <Todo key={todoList[idx].id}>
              <input type="checkbox" onChange={() => dispatch(complete(todoList[idx].id))}/>
              <div>{todo.complete === false ? <TodoText>{todo.text}</TodoText> :
                <TodoDeletedText>{todo.text}</TodoDeletedText>}</div>
              <DeleteBtn type="button" value="-" onClick={() => dispatch(deleteTodo(todoList[idx].id))}/>
            </Todo>
          ))}
        </Todos>
      </ul>
    </TodoContainer>
  );
};

export default TodoList;

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background-color: forestgreen;
  width: 100%;
`

const Todos = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: lightgreen;
  gap: 10px;
  margin: 0;
  padding: 0;
  min-width: 300px;
`

const Todo = styled.li`
  display: flex;
  list-style: none;
  //border: 1px solid #646cff;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`

const TodoText = styled.p`
  font-size: 20px;
`

const TodoDeletedText = styled.del`
  font-size: 20px;
`

const DeleteBtn = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: #E8EDEF;
  border: none;
  border-radius: 20px;
  font-size: 15px;
`
