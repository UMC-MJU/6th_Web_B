import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container= styled.div`
    color: #fff;
    font-size: 100px;
    text-align: center; 
    height: 100vh;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    margin-bottom: 30px;
`;
const Title0= styled.p`
  font-size: 80px;
  margin-bottom: 20px;
  font-weight: bold;
  
`;
const Title1= styled.p`
  font-size: 30px;
  margin-bottom: 20px;
`;
const Title2= styled.p`
  font-size: 15px;
  margin-bottom: 20px;
  font-style: italic;
`;
const Title3= styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;
const CLink = styled(Link)`
    color: #fff; 
    text-decoration: none; 
`;
function NotFound(){
    
    return (
          <Container>
            <Title0>Oops!</Title0>
            <Title1>예상치 못한 에러가 발생했습니다.</Title1>
            <Title2>Not Found</Title2>
            <Title3>
              <CLink to="/">메인으로 이동하기</CLink>
            </Title3>
          </Container>
      );

};

export default NotFound;


