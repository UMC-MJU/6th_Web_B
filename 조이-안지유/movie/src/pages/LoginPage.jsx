import React from 'react';
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: "onChange" // 입력 필드가 변경될 때마다 유효성검사 실행
  });

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) { // 에러가 하나도 없으면  -> 유효성 검사 모두 통과했다는 의미
      console.log(data);
      navigate(`/`);
    }
  }
  return (
    <LogInContainer>
      <Title>로그인 페이지</Title>
      <LogInForm onSubmit={handleSubmit(onSubmit)}>
        <Input name="name" type="text" placeholder="아이디를 입력해주세요" {...register("id", {
          required: "아이디를 입력해주세요!"
        })} errors={errors}/>
        {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}

        <Input name="password" type="password" placeholder="비밀번호를 입력해주세요" {...register("password", {
          required: "비밀번호를 입력해주세요!",
          validate: {
            minPw: v => String(v).length >= 4 || "최소 4자리 이상 입력해주세요.",
            maxPw: v => String(v).length <= 12 || "최대 12자리까지만 입력이 가능합니다.",
            pattern: v => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(v) || "비밀번호는 영어, 숫자, 특수문자를 모두 포함해주세요.",
          },
        })} errors={errors}/>
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <SubmitBtn type="submit" disabled={!isValid}>로그인</SubmitBtn>
      </LogInForm>
    </LogInContainer>
  );
};

export default LoginPage;

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(26, 26, 57);
  width: 100%;
  height: 100vh;
`

const Title = styled.h1`
  color: white;
  font-size: 20px;
  margin: 40px 0 50px 0;
`

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Input = styled.input`
  width: 30vw;
  height: 35px;
  border-radius: 30px;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 0 10px;
`


const SubmitBtn = styled.button`
  width: 30vw;
  height: 45px;
  border-radius: 30px;
  margin-top: 20px;
  cursor: pointer;
`
