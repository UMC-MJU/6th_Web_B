// TodoItems.jsx

import React from 'react';

const Items = ({ todos, completedTodos, handleCompleteTodo, handleRemoveTodo }) => {
  const handleAction = (index, type) => {
    if (type === 'complete') {
      handleCompleteTodo(index);
    } else if (type === 'remove') {
      handleRemoveTodo(index, 'todo');
    }
  };

  return (
    <div className="todoContainer">
      <div className="todoList">
        <h3>해야 할 일</h3>
        <ul>
          {todos.map((todo, index) => (
            <li key={`todo-${index}`} className="items">
              {todo}
              <button className="button" onClick={() => handleAction(index, 'complete')}>완료</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="todoList">
        <h3>해낸 일</h3>
        <ul>
          {completedTodos.map((todo, index) => (
            <li key={`completed-${index}`} className="items">
              {todo}
              <button className="button" onClick={() => handleRemoveTodo(index, 'completed')}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Items;
