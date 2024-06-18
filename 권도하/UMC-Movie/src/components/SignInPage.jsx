import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 400px;
  border-radius: 25px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 10px;
  width: 420px;
  border: none;
  border-radius: 25px;
  color: black;
  transition: background-color 0.3s ease;
`;

function SignInPage() {
  const [formData, setFormData] = useState({
    loginID: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container>
      <h2>로그인 페이지</h2>
      <Form id="signin-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="loginID"
          name="loginID"
          placeholder="아이디"
          value={formData.loginID}
          onChange={handleChange}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
}

export default SignInPage;
