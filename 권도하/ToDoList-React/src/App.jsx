// App.jsx

import React, { useState } from 'react';
import Title from '../components/Title';
import Input from '../components/Input';
import Items from '../components/TodoItems';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleCompleteTodo = (todoIndex) => {
    const completedTodo = todos[todoIndex];
    setCompletedTodos([...completedTodos, completedTodo]);
    const updatedTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index, listType) => {
    if (listType === 'todo') {
      const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
      setTodos(updatedTodos);
    } else {
      const updatedCompletedTodos = completedTodos.filter((_, completedIndex) => completedIndex !== index);
      setCompletedTodos(updatedCompletedTodos);
    }
  };

  return (
    <div className="container">
      <Title/>
      <hr />
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Items
        todos={todos} //해야 할 일
        completedTodos={completedTodos} //해낸 일
        handleCompleteTodo={handleCompleteTodo} //완료 버튼
        handleRemoveTodo={handleRemoveTodo} //삭제 버튼
      />
    </div>
  );
};

export default App;
