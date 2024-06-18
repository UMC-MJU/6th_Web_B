import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  text-align: center;
`;

const MainText = styled.h2`
  color: #fff;
  margin-bottom: 10px;
  font-size: 30px;

  @media (max-width: 330px) {
    font-size: calc(20px * 0.8);
  }

`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #333;
  border-radius: 50px;
  width: 600px;
  height: 30px;
  margin-bottom: 10px;

  @media (max-width: 400px) {
    width: 95vw;
  }

`;

const SubmitBtn = styled.button`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  border-style: none;
  border: 1px solid #333;
  border-radius: 50px;
  width: 630px;
  height: 70px;
  margin-top: 50px;
  background-color: ${({ isValid }) => (isValid ? 'yellow' : '#fff')};

  @media (max-width: 400px) {
    width: 95vw;
  }
`;

const LoginWrapper = styled.div`
  margin-top: 20px;
`;

const LoginText = styled.p`
  color: #fff;
  white-space: nowrap;

  @media (max-width: 400px) {
    width: 95vw;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #fff;

  @media (max-width: 400px) {
    width: 95vw;
  }
`;

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = '이름을 입력해주세요';
    if (!formData.username) newErrors.username = '아이디를 입력해주세요';
    if (!formData.email) newErrors.email = '이메일을 입력해주세요';
    if (!formData.age || isNaN(formData.age)) newErrors.age = '유효한 나이를 입력해주세요';
    if (!formData.password) newErrors.password = '비밀번호를 입력해주세요';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validate()) return;

    try {
      const response = await axios.post('http://localhost:8080/auth/signup', {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        age: formData.age,
        password: formData.password,
        passwordCheck: formData.confirmPassword
      });
      console.log(response.data);
      alert('회원가입이 정상적으로 처리되었습니다!');
      window.location.href = '/Login';
    } catch (error) {
      if (error.response) {
        console.error('Error signing up:', error.response.data);
        const errorMsg = error.response.data.message;
        if (error.response.status === 409) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            username: '이미 존재하는 아이디입니다.'
          }));
        } else if (error.response.status === 400 && errorMsg === 'Passwords do not match') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: '비밀번호가 일치하지 않습니다'
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            general: '회원가입에 실패했습니다. 다시 시도해주세요.'
          }));
        }
      } else {
        console.error('Error signing up:', error.message);
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: '회원가입에 실패했습니다. 서버와의 연결에 문제가 있습니다.'
        }));
      }
    }
  };

  const isValid =
    formData.name &&
    formData.username &&
    formData.email &&
    formData.age &&
    formData.password &&
    formData.confirmPassword &&
    !Object.values(errors).some((error) => error);

  return (
    <Container>
      <div>
        <MainText>회원가입 페이지</MainText>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <InputField
              type="text"
              placeholder="이름을 입력해주세요"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {submitted && errors.name && (
              <p style={{ color: 'red', fontSize: '15px' }}>{errors.name}</p>
            )}
            <InputField
              type="text"
              placeholder="아이디를 입력해주세요"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {submitted && errors.username && (
              <p style={{ color: 'red', fontSize: '15px' }}>{errors.username}</p>
            )}
            <InputField
              type="email"
              placeholder="이메일을 입력해주세요"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {submitted && errors.email && (
              <p style={{ color: 'red', fontSize: '15px' }}>{errors.email}</p>
            )}
            <InputField
              type="text"
              placeholder="나이를 입력해주세요"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {submitted && errors.age && (
              <p style={{ color: 'red', fontSize: '15px' }}>{errors.age}</p>
            )}
            <InputField
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {submitted && errors.password && (
              <p style={{ color: 'red', fontSize: '15px' }}>{errors.password}</p>
            )}
            <InputField
              type="password"
              placeholder="비밀번호 확인"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {submitted && errors.confirmPassword && (
              <p style={{ color: 'red', fontSize: '15px' }}>{errors.confirmPassword}</p>
            )}
          </InputWrapper>
          <SubmitBtn type="submit" isValid={isValid}>
            제출하기
          </SubmitBtn>
        </form>
        {submitted && errors.general && (
          <p style={{ color: 'red', fontSize: '15px' }}>{errors.general}</p>
        )}
        <LoginWrapper>
          <LoginText>
            이미 아이디가 있으신가요?{' '}
            <span style={{ color: '#fff', fontWeight: 'bold' }}>
              <Button as={Link} to="/Login">
                로그인 페이지로 이동하기
              </Button>
            </span>
          </LoginText>
        </LoginWrapper>
      </div>
    </Container>
  );
}

export default SignUpPage;