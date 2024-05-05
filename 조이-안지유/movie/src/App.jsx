import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import "../index.css";
import {Route, Routes} from "react-router-dom";
import PopularPage from "./pages/PopularPage.jsx";
import NowPlayingPage from "./pages/NowPlayingPage.jsx";
import TopRatedPage from "./pages/TopRatedPage.jsx";
import UpComing from "./pages/UpComing.jsx";
import styled from "styled-components";
import MovieDetailPage from "./pages/MovieDetailPage.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/movie/:title" element={<MovieDetailPage/>}/>
          <Route path="/popular" element={<PopularPage/>}/>
          <Route path="/nowplaying" element={<NowPlayingPage/>}/>
          <Route path="/toprated" element={<TopRatedPage/>}/>
          <Route path="/upcoming" element={<UpComing/>}/>
        </Routes>
      </Container>
      <Footer/>
    </>
  )
}

export default App

const Container = styled.div`
  margin: 25px 0 15px 0;
`
