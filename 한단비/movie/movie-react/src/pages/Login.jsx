import React from "react";
import { useForm } from "react-hook-form";
import { DetailContainer } from "./MovieDetailPage";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import {
  Container,
  Title,
  InputContainer,
  InputWrapper,
  InputValue,
  SubmitButton,
  ErrorText,
} from "./RegisterPage";
import ApiLogin from "../components/ApiLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm({});

  const navigator = useNavigate();
  // 쿠키
  const [cookies, setCookies, removeCookies] = useCookies(['user']);

  const onSubmit = async (data) => {
    //console.log(data);
    if (isValid) {
      try {
        const { token, username } = await ApiLogin(data.id, data.pwd);
        console.log("로그인 성공", { token, username });
        setCookies('user', token, { path: '/', httpOnly: true, maxAge: 3600 }); // 쿠키에 사용자 정보 저장
        navigator("/"); // 메인으로 이동
      } catch (error) {
        console.error("로그인 실패", error);
      }
      //alert("회원가입을 축하합니다!");
    } else {
      console.log("제출 실패");
    }
  };

  // 아이디 유효성
  const idRegister = register("id", {
    required: { value: true, message: "아이디를 입력해주세요!" },
  });

  // 비밀번호 유효성 검사
  const pwdRegister = register("pwd", {
    required: { value: true, message: "비밀번호를 입력해주세요!" },
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@])[a-zA-Z\d!@]{8,12}$/,
      message: "비밀번호는 영문, 숫자, 특수문자를 포함해주세요.",
    },
  });

  return (
    <DetailContainer align={true}>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Title>로그인 페이지</Title>
        <InputContainer>
          <InputWrapper>
            <InputValue
              {...idRegister}
              type="text"
              id="id"
              placeholder="아이디"
            />
            {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <InputValue
              {...pwdRegister}
              type="password"
              id="pwd"
              placeholder="비밀번호"
            />
            {errors.pwd && <ErrorText>{errors.pwd.message}</ErrorText>}
          </InputWrapper>
        </InputContainer>
        <SubmitButton back={isValid} type="submit">
          로그인
        </SubmitButton>
      </Container>
    </DetailContainer>
  );
};

export default Login;
