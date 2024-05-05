import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 수정된 부분: './App'로 변경


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
</React.StrictMode>
);
