// 회원가입, Popular, Now Playing, Top Rated, Upcoming
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  // 회원가입
  const moveToRegister = () => {
    toggleSidebar();
    navigate("/register");
  };

  // Popular
  const moveToPopular = () => {
    toggleSidebar();
    navigate("/popular");
  };

  // Now Playing
  const moveToNow = () => {
    toggleSidebar();
    navigate("/nowplaying");
  };

  // Top Rated
  const moveToTop = () => {
    toggleSidebar();
    navigate("/toprated");
  };

  // Upcoming
  const moveToUp = () => {
    toggleSidebar();
    navigate("/upcoming");
  };

  return (
    <SideContainer isSidebarOpen={isSidebarOpen}>
      <InnerContainer>
        <MoveBtn onClick={moveToRegister}>회원가입</MoveBtn>
        <MoveBtn onClick={moveToPopular}>Popular</MoveBtn>
        <MoveBtn onClick={moveToNow}>Now Playing</MoveBtn>
        <MoveBtn onClick={moveToTop}>Top Rated</MoveBtn>
        <MoveBtn onClick={moveToUp}>Upcoming</MoveBtn>
      </InnerContainer>
    </SideContainer>
  );
};
export default Sidebar;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const SideContainer = styled.div`
  position: fixed;
  top: 64px;
  right: 0;
  background: #1f2141;
  width: 100%;
  height: 100%;
  z-index: 9;
  transform: translateX(${(props) => (props.isSidebarOpen ? "0" : "100%")});
  animation: ${(props) => (props.isSidebarOpen ? slideIn : slideOut)} 0.5s ease;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #1f2141;
  width: 100%;
  height: 100%;
  gap: 1rem;
  margin: 1rem;
`;

const MoveBtn = styled.button`
  width: 80%;
  padding: auto;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  color: white;
`;
