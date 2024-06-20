import React from 'react';
import styled from "styled-components";
import {CategoryTitle} from "./Navbar.jsx";
import {useNavigate} from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <SideBarContainer>
      <CategoryMenu onClick={() => {
        navigate('/signup')
      }}>회원가입</CategoryMenu>
      <CategoryMenu onClick={() => {
        navigate('/popular')
      }}>Popular</CategoryMenu>
      <CategoryMenu onClick={() => {
        navigate('/nowplaying')
      }}>Now Playing</CategoryMenu>
      <CategoryMenu onClick={() => {
        navigate('/toprated')
      }}>Top Rated</CategoryMenu>
      <CategoryMenu onClick={() => {
        navigate('/upcoming')
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

const CategoryMenu = styled(CategoryTitle)`
  padding: 10px 0 10px 0;
  //
`
