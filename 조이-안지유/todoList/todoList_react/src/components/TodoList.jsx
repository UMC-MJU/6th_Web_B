import React from 'react';
import styled from "styled-components";
import {useTodos} from "../hooks/useTodos.jsx";


const TodoList = () => {
  const {todoList, completeTodo, removeTodo} = useTodos();

  return (
    <TodoContainer>
      <ul style={{margin: "0", padding: "0"}}>
        <Todos>
          {todoList.map((todo, idx) => (
            <Todo key={todoList[idx].id}>
              <input type="checkbox" onChange={() => completeTodo(todo.id)}/>
              <div>{todo.complete === false ? <TodoText>{todo.text}</TodoText> :
                <TodoDeletedText>{todo.text}</TodoDeletedText>}</div>
              <DeleteBtn type="button" value="-" onClick={() => removeTodo(todo.id)}/>
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
  width: 100%;
`

const Todos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  min-width: 300px;
`

const Todo = styled.li`
  display: flex;
  list-style: none;
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
