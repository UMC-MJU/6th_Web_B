import Main from "./pages/Main.jsx";
import {movies} from "./assets/movies.js";

function App() {
  return (
    <>
      <Main data={movies}/>
    </>
  )
}

export default App
