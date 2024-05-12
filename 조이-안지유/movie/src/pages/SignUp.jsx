import React from 'react';
import styled from "styled-components";
import SignUpInput from "../components/SignUpInput.jsx";
import {useForm} from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <SignUpContainer>
      <Title>회원가입 페이지</Title>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpInput name="name" type="text" placeholder="이름을 입력해주세요" register={register}
                     handleSubmit={handleSubmit} watch={watch} errors={errors}/>
        <SignUpInput name="email" type="email" placeholder="이메일을 입력해주세요" register={register}
                     handleSubmit={handleSubmit}
                     watch={watch} errors={errors}/>
        <SignUpInput name="age" type="text" placeholder="나이를 입력해주세요" register={register}
                     handleSubmit={handleSubmit}
                     watch={watch} errors={errors}/>
        <SignUpInput name="password" type="password"
                     placeholder="비밀번호를 입력해주세요" register={register}
                     handleSubmit={handleSubmit} watch={watch} errors={errors}/>
        <SignUpInput name="checkPassword" type="password"
                     placeholder="비밀번호 확인" register={register}
                     handleSubmit={handleSubmit} watch={watch} errors={errors}/>
        <SubmitBtn type="submit">제출하기</SubmitBtn>
      </SignUpForm>
      <AdditionalBox>
        <AdditionalText>이미 아이디가 있으신가요?</AdditionalText>
        <GoLoginText>로그인 페이지로 이동하기</GoLoginText>
      </AdditionalBox>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
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

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`


const SubmitBtn = styled.button`
  width: 30vw;
  height: 45px;
  border-radius: 30px;
  margin-top: 20px;
  cursor: pointer;
`

const AdditionalBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`

const AdditionalText = styled.p`
  color: white;
  font-size: 14px;
`

const GoLoginText = styled(AdditionalText)`
  font-weight: bold;
`
