import React from 'react';
import styled from 'styled-components';
import cartItems from '../constants/cartItems';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AlbumContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 80%;
`;

const AlbumImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlbumTitle = styled.h3`
  margin: 0;
  font-weight: bold;
`;

const AlbumSinger = styled.p`
  margin: 5px 0;
`;

const AlbumPrice = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const AddButton = styled.button`
  all: unset;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

function MainPage() {
  return (
    <MainPageContainer>
      {cartItems.map(item => (
        <AlbumContainer key={item.id}>
          <AlbumImage src={item.img} alt={item.title} />
          <AlbumInfo>
            <AlbumTitle>{item.title}</AlbumTitle>
            <AlbumSinger>{item.singer}</AlbumSinger>
            <AlbumPrice>₩{item.price}</AlbumPrice>
            <AddButton>^</AddButton>
          </AlbumInfo>
        </AlbumContainer>
      ))}
    </MainPageContainer>
  );
}

export default MainPage;
