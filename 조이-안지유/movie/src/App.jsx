import Main from "./pages/Main.jsx";
import {movies} from "./assets/movies.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Main data={movies}/>
      <Footer/>
    </>
  )
}

export default App
