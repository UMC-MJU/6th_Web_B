import './App.css';
import { movies } from './movieDummy';
import Movie from './components/Movie';

// movie components를 받는 container
function App() {
  return (
    <div>
      <div className='body-container'>
        {
        movies.results.map((item)=>{
            return (
              <Movie
                key={item.id}
                title = {item.title}
                poster_path= {item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                />
            );
        })
      }
      </div>
    </div>
  );
}

export default App;

// jsx 문법을 사용할 때는 {} 중괄호 내에 입력 !!