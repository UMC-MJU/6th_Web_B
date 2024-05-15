import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
`;

const Message = styled.div`
  text-align: center;
`;

const NotFoundText = styled.h3`
  font-style: italic;
`;

const MainButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Message>
        <h1>Oops!</h1>
        <h2>예상치 못한 에러가 발생했습니다; '^'</h2>
        <NotFoundText>Not Found</NotFoundText>
      </Message>
      <MainButton to="/">메인으로 이동하기</MainButton>
    </Container>
  );
};

export default NotFoundPage;
