import React from "react";
import { useForm } from "react-hook-form";
import { DetailContainer } from "./MovieDetailPage";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    if (isValid) {
      console.log(data);
      alert("회원가입을 축하합니다!");
    } else {
      console.log("제출 실패");
    }
  };

  // 로그인 페이지로 이동

  // 이름 유효성
  const nameRegister = register("name", {
    required: { value: true, message: "이름을 입력해주세요." },
    minLength: {
      value: 2,
      message: "이름은 2글자 이상 6글자 이하여야 합니다.",
    },
    maxLength: {
      value: 6,
      message: "이름은 2글자 이상 6글자 이하여야 합니다.",
    },
  });

  // 이메일 유효성 검사
  const emailRegister = register("email", {
    required: { value: true, message: "이메일을 입력해주세요." },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "이메일 형식이 올바르지 않습니다.",
    },
  });

  // 나이 유효성 검사
  const ageRegister = register("age", {
    required: { value: true, message: "나이를 입력해주세요." },
    validate: {
      isInteger: (value) =>
        Number.isInteger(Number(value)) || "나이는 소수가 될 수 없습니다.",
      isPositive: (value) =>
        Number(value) > 0 || "나이는 음수가 될 수 없습니다.",
      isNumber: (value) =>
        !isNaN(value) & /^\d+$/.test(value) || "숫자만 입력할 수 있습니다.",
      isOldEnough: (value) =>
        Number(value) > 19 || "미성년자는 가입할 수 없습니다.",
    },
  });

  // 비밀번호 유효성 검사
  const pwdRegister = register("password", {
    required: { value: true, message: "비밀번호를 입력해주세요." },
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@])[a-zA-Z\d!@]{8,12}$/,
      message:
        "비밀번호는 영문, 숫자, 특수문자(!,@)를 모두 포함하여 8~12글자이어야 합니다.",
    },
  });

  // 비밀번호 확인 검사
  const matchRegister = register("matchPassword", {
    required: { value: true, message: "비밀번호를 다시 입력해주세요." },
    validate: (value) =>
      value === getValues("password") || "비밀번호가 일치하지 않습니다.", // 수정된 부분
  });

  return (
    <DetailContainer align={true}>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Title>회원가입 페이지</Title>
        <InputContainer>
          <InputWrapper>
            <InputValue
              {...nameRegister}
              type="text"
              id="name"
              placeholder="이름을 입력해주세요"
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <InputValue
              {...emailRegister}
              type="email"
              id="email"
              placeholder="이메일을 입력해주세요"
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <InputValue
              {...ageRegister}
              type="number"
              id="age"
              placeholder="나이를 입력해주세요"
            />
            {errors.age && <ErrorText>{errors.age.message}</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <InputValue
              {...pwdRegister}
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputValue
              {...matchRegister}
              type="password"
              id="matchPassword"
              placeholder="비밀번호 확인"
            />
            {errors.matchPassword && (
              <ErrorText>{errors.matchPassword.message}</ErrorText>
            )}
          </InputWrapper>
        </InputContainer>
        <SubmitButton back={isValid} type="submit">
          제출하기
        </SubmitButton>
        <ForUserContainer>
          <ForUser>이미 아이디가 있으신가요?</ForUser>
          <MovePage>로그인 페이지로 이동하기</MovePage>
        </ForUserContainer>
      </Container>
    </DetailContainer>
  );
};

export default Register;

const Container = styled.form`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: white;
  font-weight: 600;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
`;

const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
const InputValue = styled.input`
  width: 80%;
  border: none;
  outline: none;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 30px;
`;

const SubmitButton = styled.button`
  width: 80%;
  border-radius: 30px;
  height: 50px;
  border: none;
  background-color: ${(props) => (props.back ? "#FEC623" : "white")};
  font-size: 20px;
  font-weight: 700;
  color: 'white'};
`;

const ErrorText = styled.div`
  color: #da353a;
  text-align: left;
  align-self: flex-start;
  margin-left: 50px;
`;

const ForUserContainer = styled.div`
  widht: 100%;
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const ForUser = styled.h1`
  color: white;
  font-size: 18px;
`;

const MovePage = styled(ForUser)`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;
