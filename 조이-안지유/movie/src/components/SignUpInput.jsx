import React from 'react';
import styled from "styled-components";

const SignUpInput = ({
                       name,
                       type,
                       placeholder,
                       errors,
                       ...rest
                     }) => {
  console.log(errors);
  return (
    <InputContainer>
      <Input name={name} type={type} placeholder={placeholder} {...rest}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </InputContainer>
  );
};

export default SignUpInput;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input`
  width: 30vw;
  height: 35px;
  border-radius: 30px;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  //margin: 0;
  margin: 5px 0 0 10px;
`
