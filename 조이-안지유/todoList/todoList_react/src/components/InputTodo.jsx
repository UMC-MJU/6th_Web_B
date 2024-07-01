import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/todoSlice.js";
import styled from "styled-components";

const InputTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    } else (alert("할 일을 입력해주세요!"));
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit}>
        <Inputs>
          <TodoInput type="text" value={text} onChange={handleTextChange}/>
          <TodoButton type="submit" value="+"/>
        </Inputs>
      </form>
    </InputContainer>
  );
};

export default InputTodo;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Inputs = styled.div`
  display: flex;
  gap: 10px;
`


const TodoInput = styled.input`
  width: 200px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid #E8EDEF;
`

const TodoButton = styled.input`
  width: 25px;
  height: 25px;
  background-color: #E8EDEF;
  border: none;
  border-radius: 20px;
  font-size: 20px;
`
