import Main from "./pages/Main.jsx";
import {movies} from "./assets/movies.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import "../index.css";
import {Route, Routes} from "react-router-dom";
import PopularPage from "./pages/PopularPage.jsx";
import NowPlayingPage from "./pages/NowPlayingPage.jsx";
import TopRatedPage from "./pages/TopRatedPage.jsx";
import UpComing from "./pages/UpComing.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/main" element={<Main data={movies}/>}/>
        <Route path="/popular" element={<PopularPage/>}/>
        <Route path="/nowplaying" element={<NowPlayingPage/>}/>
        <Route path="/toprated" element={<TopRatedPage/>}/>
        <Route path="/upcoming" element={<UpComing/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
