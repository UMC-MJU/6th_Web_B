import React from 'react';
import styled from "styled-components";
import SignUpInput from "../components/SignUpInput.jsx";
import {useForm} from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: {errors},
  } = useForm({
    mode: "onChange" // 입력 필드가 변경될 때마다 유효성검사 실행
  });
  const checkPassword = watch("password");
  const onSubmit = (data) => {
    if (data.password !== data.checkPassword) {
      setError("checkPassword", {
        type: "manual",
        message: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }
    console.log(data);
  }
  return (
    <SignUpContainer>
      <Title>회원가입 페이지</Title>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpInput name="name" type="text" placeholder="이름을 입력해주세요" {...register("name", {required: "이름을 입력해주세요!"})}
                     errors={errors}/>
        <SignUpInput name="email" type="email"
                     placeholder="이메일을 입력해주세요" {...register("email", {required: "이메일을 입력해주세요!"})} errors={errors}/>
        <SignUpInput name="age" type="text" placeholder="나이를 입력해주세요" {...register("age", {
          required: "나이를 입력해주세요!",
          min: {value: 19, message: "19세 이상만 이용가능합니다!"},
          pattern: {value: /^\d+$/, message: "나이는 숫자로 입력해주세요!"}
        })} errors={errors}/>
        <SignUpInput name="password" type="password"
                     placeholder="비밀번호를 입력해주세요" {...register("password", {
          required: "비밀번호를 입력해주세요!",
          minLength: {value: 4, message: "최소 4자리 이상 입력해주세요."},
          maxLength: {value: 12, message: "최대 12자리까지만 입력이 가능합니다."},
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,12}$/,
            message: "비밀번호는 영어, 숫자, 특수문자를 모두 포함해주세요."
          }
        })} errors={errors}/>
        <SignUpInput name="checkPassword" type="password"
                     placeholder="비밀번호 확인" {...register("checkPassword", {required: "비밀번호를 다시 입력해주세요!"})}
                     errors={errors}/>
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
