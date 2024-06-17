import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  color: white;
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
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s ease;

  background-color: ${props => props.disabled ? 'white' : 'yellow'};
`;

const LoginSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 420px;
  margin-top: 20px;
`;

const LoginText = styled.div`
  margin-right: 30px;
`;

const LoginButton = styled.button`
  text-align: left;
  border: none;
  color: white;
  background-color: transparent;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  color: red;
  align-self: flex-start;
  margin-left: 20px;
`;

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validate());
  }, [formData]);

  const validate = () => {
    let errors = {};

    // 이름 검증
    if (formData.name === ''){
      errors.name = '이름을 입력해주세요!';
    }

    // 이메일 검증
    if (formData.email === ''){
      errors.email = '이메일을 입력해주세요!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!';
    }

    // 나이 검증
    if (formData.age === '') {
      errors.age = '나이를 입력해주세요!';
    } else if (isNaN(Number(formData.age))) {
      errors.age = '나이는 숫자 형식이어야 합니다!';
    } else if (Number(formData.age) < 0) {
      errors.age = '나이는 음수가 될 수 없습니다!';
    } else if (!Number.isInteger(Number(formData.age))) {
      errors.age = '나이는 소수가 될 수 없습니다!';
    } else if (Number(formData.age) < 19) {
      errors.age = '미성년자는 가입할 수 없습니다!';
    }

    // 비밀번호 검증
    if (formData.password === '') {
      errors.password = '비밀번호를 입력해주세요!';
    } else if (formData.password.length < 4) {
      errors.password = '비밀번호는 최소 4자리 이상이어야 합니다.';
    } else if (formData.password.length > 12) {
      errors.password = '비밀번호는 최대 12자리까지 가능합니다.';
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(formData.password)) {
      errors.password = '비밀번호는 영어, 숫자, 특수문자를 모두 조합해서 작성해야 합니다.';
    }

    // 비밀번호 확인 검증
    if (formData.confirmPassword === '') {
      errors.confirmPassword = '비밀번호를 다시 입력해주세요!';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      console.log('회원가입 정보:', formData);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    validate();
  };

  return (
    <Container>
      <h2>회원가입 페이지</h2>
      <Form id="signup-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
        />
        <ErrorMessage id="name-error" className={formErrors.name ? 'error' : 'success'}>
          {formErrors.name && formErrors.name}
        </ErrorMessage>

        <Input
          type="text"
          id="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleChange}
        />
        <ErrorMessage id="email-error" className={formErrors.email ? 'error' : 'success'}>
          {formErrors.email && formErrors.email}
        </ErrorMessage>

        <Input
          type="text"
          id="age"
          name="age"
          placeholder="나이"
          value={formData.age}
          onChange={handleChange}
        />
        <ErrorMessage id="age-error" className={formErrors.age ? 'error' : 'success'}>
          {formErrors.age && formErrors.age}
        </ErrorMessage>

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
        />
        <ErrorMessage id="password-error" className={formErrors.password ? 'error' : 'success'}>
          {formErrors.password && formErrors.password}
        </ErrorMessage>

        <Input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <ErrorMessage id="confirm-password-error" className={formErrors.confirmPassword ? 'error' : 'success'}>
          {formErrors.confirmPassword && formErrors.confirmPassword}
        </ErrorMessage>
        <Button type="submit" disabled={!isValid} onClick={() => isValid && navigate("/signin")}>제출하기</Button>
        <LoginSection>
          <LoginText>이미 아이디가 있으신가요?</LoginText>
          <LoginButton onClick={() => navigate("/signin")}>로그인 페이지로 이동하기</LoginButton>
        </LoginSection>
      </Form>
    </Container>
  );
}

export default SignUpPage;
