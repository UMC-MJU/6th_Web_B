import TodoList from "./components/TodoList.jsx";
import InputTodo from "./components/InputTodo.jsx";
import styled from "styled-components";

function App() {

  return (
    <Container>
      <TodoContainer>
        <InputTodo/>
        <TodoList/>
      </TodoContainer>
    </Container>
  )
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E8EDEF;
  width: 100vw;
  height: 100vh;
`

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 700px;
  background-color: white;
  border-radius: 5%;
  gap: 20px;
`
