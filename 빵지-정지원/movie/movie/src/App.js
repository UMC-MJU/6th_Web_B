import React from 'react';
import Poster from './movie';
import { movies } from './API';

const App = () => {
    return (
    <div className='container'>
        {movies.results.map((item, index) => ( 
        <Poster
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
            index={index}
        />
        ))}
    </div>
    );
}

export default App;