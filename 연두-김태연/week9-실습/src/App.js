import React from "react";
import * as S from "./App.styles";

import InputForm from "./InputForm";
import TodoList from "./TodoList";

function App() {
  return (
    <S.Container>
      <S.Wrapper>
        <h1>Todo List</h1>
        <InputForm />
        <TodoList />
      </S.Wrapper>
    </S.Container>
  );
}

export default App;
