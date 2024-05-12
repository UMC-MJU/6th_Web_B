import React from 'react';
import styled from "styled-components";

const SignUpInput = ({
                       name,
                       type,
                       placeholder,
                       register,
                       handleSubmit,
                       watch,
                       errors
                     }) => {
  // props 전달 받기
  // name, type, placeholder, errormessage, 유효성검사....,
  return (
    <>
      <Input name={name} type={type} placeholder={placeholder} {...register(name)} handleSubmit={handleSubmit}
             watch={watch}></Input>
    </>
  );
};

export default SignUpInput;

const Input = styled.input`
  width: 30vw;
  height: 35px;
  border-radius: 30px;
`
