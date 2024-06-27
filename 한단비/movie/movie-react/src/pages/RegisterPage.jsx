import React from "react";
import { useForm } from "react-hook-form";
import { DetailContainer } from "./MovieDetailPage";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ApiRegister from "../components/Register";
import { theme } from "../theme";

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

  const onSubmit = async (data) => {
    console.log(data);
    if (isValid) {
      try {
        const result = await ApiRegister(
          data.name,
          data.email,
          data.age,
          data.id,
          data.password,
          data.matchPassword
        );
        console.log("제출 성공", result);
        alert("회원가입을 축하합니다!");
        navigate("/login");
      } catch (error) {
        console.log("api 연동 실패");
      }
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

  // 아이디 유효성
  const idRegister = register("id", {
    required: { value: true, message: "아이디를 입력해주세요." },
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

  // 로그인 페이지로 이동
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate("/login");
  };

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
              {...idRegister}
              type="text"
              id="id"
              placeholder="아이디를 입력해주세요"
            />
            {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
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
          <MovePage onClick={moveToLogin}>로그인 페이지로 이동하기</MovePage>
        </ForUserContainer>
      </Container>
    </DetailContainer>
  );
};

export default Register;

// export const Container = styled.form`
//   width: 650px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 2rem;
//   margin-top: 50px;
// `;

// export const Title = styled.h1`
//   font-size: 20px;
//   color: white;
//   font-weight: 600;
//   text-align: center;
// `;

// export const InputContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 1.25rem;
// `;

// export const InputWrapper = styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 1rem;
// `;
// export const InputValue = styled.input`
//   width: 80%;
//   border: none;
//   outline: none;
//   font-weight: 600;
//   line-height: 1.5rem;
//   padding: 0.75rem 1.25rem;
//   border-radius: 30px;
// `;

// export const SubmitButton = styled.button`
//   width: 80%;
//   border-radius: 30px;
//   height: 50px;
//   border: none;
//   background-color: ${(props) => (props.back ? "#FEC623" : "white")};
//   font-size: 20px;
//   font-weight: 700;
//   color: 'white'};
// `;

// export const ErrorText = styled.div`
//   color: #da353a;
//   text-align: left;
//   align-self: flex-start;
//   margin-left: 50px;
// `;

// const ForUserContainer = styled.div`
//   widht: 100%;
//   display: flex;
//   gap: 20px;
//   margin-top: 20px;
// `;

// const ForUser = styled.h1`
//   color: white;
//   font-size: 18px;
//   align-self: center;
// `;

// const MovePage = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-weight: 700;
//   font-size: 20px;
// `;
export const Container = styled.form`
  width: 80%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin-top: 5%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: 600;
  text-align: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
`;

export const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const InputValue = styled.input`
  width: 80%;
  border: none;
  outline: none;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 30px;
`;

export const SubmitButton = styled.button`
  width: 80%;
  border-radius: 30px;
  height: 3rem;
  border: none;
  background-color: ${(props) => (props.back ? "#FEC623" : "white")};
  font-size: 1.5rem;
  font-weight: 700;
  color: 'white'};
`;

export const ErrorText = styled.div`
  color: #da353a;
  text-align: left;
  align-self: flex-start;
  margin-left: 5%;
`;

const ForUserContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;

  ${theme.media.mobile`
      flex-direction: column;
    `}
`;

const ForUser = styled.h1`
  color: white;
  font-size: 1rem;
  align-self: center;
`;

const MovePage = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
`;
