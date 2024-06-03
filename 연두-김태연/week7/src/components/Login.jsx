import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
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
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #333;
  border-radius: 50px;
  width: 600px;
  height: 30px;
  margin-bottom: 10px;
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
`;

function Loginpage() {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            'https://api.themoviedb.org/3/movie/popular',
            {
              params: {
                api_key: '46a397cf7e08676521ec72f5fa736dd3',
              },
            }
          );
          setMovieData(response.data.results);
          setLoading(false); // -> 데이터 가져오기 완료 후 로딩 상태 변경
        }, 500); // 로딩 시간이 넘 짧아서 확인할 수 없어 0.5초로 지연시켜 확인한다.
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        setLoading(false); // 에러 발생 시 로딩 상태 변경
      }
    };

    fetchData();
  }, []);

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
              //실시간으로 에러문이 변동될 때 
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

export default Loginpage;
