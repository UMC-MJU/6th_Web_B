// Input.jsx

import React from 'react';

const Input = ({ value, onChange, onKeyPress }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder="UMC 스터디 계획을 작성해보세요!"
      className='input'
    />
  );
};

export default Input;
