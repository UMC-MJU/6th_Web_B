import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isValid},
  } = useForm({
    mode: "onChange" // 입력 필드가 변경될 때마다 유효성검사 실행
  });
  const password = watch("password");
  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) { // 에러가 하나도 없으면 -> 유효성 검사 모두 통과했다는 의미
      console.log(data);
      alert("회원가입이 완료되었습니다!")
      navigate(`/`);
    }
  }

  return (
    <SignUpContainer>
      <Title>회원가입 페이지</Title>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <Input name="name" type="text" placeholder="이름을 입력해주세요" {...register("name", {
          required: "이름을 입력해주세요!"
        })} errors={errors}/>
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

        <Input name="name" type="text" placeholder="아이디를 입력해주세요" {...register("id", {
          required: "아이디를 입력해주세요!"
        })} errors={errors}/>
        {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}

        <Input name="email" type="email"
               placeholder="이메일을 입력해주세요" {...register("email", {
          required: "이메일을 입력해주세요!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "이메일 형식에 맞게 입력해주세요!"
          }
        })} errors={errors}/>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input name="age" type="text" placeholder="나이를 입력해주세요" {...register("age", {
          required: "나이를 입력해주세요!",
          validate: {
            positive: v => parseInt(v) > 0 || "나이는 양수여야 합니다.",
            isInteger: v => parseInt(v) === parseFloat(v) || "나이는 실수로 입력할 수 없습니다.",
            minAge: v => parseInt(v) >= 19 || "19세 이상만 이용가능합니다!"
          }
        })} errors={errors}/>
        {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}

        <Input name="password" type="password" placeholder="비밀번호를 입력해주세요" {...register("password", {
          required: "비밀번호를 입력해주세요!",
          validate: {
            minPw: v => String(v).length >= 4 || "최소 4자리 이상 입력해주세요.",
            maxPw: v => String(v).length <= 12 || "최대 12자리까지만 입력이 가능합니다.",
            pattern: v => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(v) || "비밀번호는 영어, 숫자, 특수문자를 모두 포함해주세요.",
          },
        })} errors={errors}/>
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <Input name="checkPassword" type="password" placeholder="비밀번호를 다시 입력해주세요" {...register("checkPassword", {
          required: "비밀번호를 다시 입력해주세요!",
          validate: {samePw: v => v === password || "비밀번호가 일치하지 않습니다.",}
        })} errors={errors}/>
        {errors.checkPassword && <ErrorMessage>{errors.checkPassword.message}</ErrorMessage>}
        <SubmitBtn type="submit" disabled={!isValid}>제출하기</SubmitBtn>
      </SignUpForm>
      <AdditionalBox>
        <AdditionalText>이미 아이디가 있으신가요?</AdditionalText>
        <GoLoginText onClick={() => {
          navigate(`/login`)
        }}>로그인 페이지로 이동하기</GoLoginText>
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
  cursor: pointer;
`
