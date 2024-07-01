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
        <div>
          <input type="text" value={text} onChange={handleTextChange}/>
          <input type="submit" value="+"/>
        </div>
      </form>
    </InputContainer>
  );
};

export default InputTodo;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #E8EDEF;
`
