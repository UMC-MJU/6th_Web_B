import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const SideBar = ({setShowCategory}) => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
    setShowCategory(false);
  }
  return (
    <SideBarContainer>
      <CategoryMenu onClick={() => {
        handleCategoryClick('/signup')
      }}>회원가입</CategoryMenu>
      <CategoryMenu onClick={() => {
        handleCategoryClick('/popular')
      }}>Popular</CategoryMenu>
      <CategoryMenu onClick={() => {
        handleCategoryClick('/nowplaying')
      }}>Now Playing</CategoryMenu>
      <CategoryMenu onClick={() => {
        handleCategoryClick('/toprated')
      }}>Top Rated</CategoryMenu>
      <CategoryMenu onClick={() => {
        handleCategoryClick('/upcoming')
      }}>Upcoming</CategoryMenu>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(26, 35, 78, 0.95);
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 5px;
`

const CategoryMenu = styled.button`
  padding: 15px 0 10px 30px;
  text-align: left;
  color: white;
  font-size: 14px;
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    font-size: 15px;
    color: gold;
    font-weight: bold;
  }
`
