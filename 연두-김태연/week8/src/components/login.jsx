import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
  
  @media (max-width: 400px) {
    width: 95vw;
  }  
`;

const InputField = styled.input`
  padding: 10px;
  margin-top: 20px;
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
  height: 60px;
  margin-top: 50px;
  background-color: ${({ isValid }) => (isValid ? 'yellow' : '#fff')};
  
  @media (max-width: 400px) {
    width: 95vw;
  }

`;

function LoginPage({ onLogin }) {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      //404 오류가 계속 나옴 -> API 명세서 보면 유효하지 않은 토큰일시 (Error 404) 나온다고 한다~ 비번 받어~
      const response = await axios.post('http://localhost:8080/auth/login', { username: ID, password: password });
      const { token, username } = response.data;
  
      // 로그인 성공 시 토큰과 사용자 이름을 로컬스토리지에 저장
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      // 로그인 상태 업데이트를 위한 콜백 호출
      onLogin();
    } catch (error) {
      console.error('로그인 오류:', error);
     
    }
  };
  
// 로그인 유효성 검사 유지해라~
  const validateName = (name) => {
    if (!name.trim()) {
      return '이름을 입력해주세요.';
    } else if (!/^[가-힣a-zA-Z]+$/.test(name)) {
      return '이름은 한글 또는 영어로만 이루어져야 합니다.';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      return '비밀번호를 입력해주세요.';
    } else if (
      password.length < 4 ||
      password.length > 12 ||
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])/.test(password)
    ) {
      return '영어, 숫자, 특수 문자를 조합하여 4자 이상 12자 이하로 입력해주세요.';
    }
    return '';
  };

  const isValid = !validateName(ID) && !validatePassword(password);

  return (
    <Container>
      <div>
        <MainText>로그인 페이지</MainText>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <InputField
              type="text"
              placeholder="아이디를 입력해주세요"
              value={ID}
              onChange={(e) => setID(e.target.value)}
            />
            {submitted && validateName(ID) && (
              <p style={{ color: 'red', fontSize: '15px' }}>{validateName(ID)}</p>
            )}
            <InputField
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {submitted && validatePassword(password) && (
              <p style={{ color: 'red', fontSize: '15px' }}>{validatePassword(password)}</p>
            )}
          </InputWrapper>
          <SubmitBtn type="submit" isValid={isValid}>
            로그인
          </SubmitBtn>
        </form>
      </div>
    </Container>
  );
}

export default LoginPage;