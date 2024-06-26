

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTU4ZjRmMDkzZTA5YzMzNTRhMzc5YmM5MDE3NDNkYiIsInN1YiI6IjY2MzBiN2UyNTU0NWNhMDEyNzQzYTg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZBTyh7vTa1ZWw-Es1QVqE-1tjBoELhoJwb4cH7ciHgA'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));