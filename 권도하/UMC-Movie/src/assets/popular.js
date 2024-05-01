import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  params: {language: 'ko', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWUwYWU5YjczMmQ5NmIxNmE0NTkyNjE4NzQzNDc4OCIsInN1YiI6IjY2MzFlY2U2YWQ1OWI1MDEyYjZjYTEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jt-7nM-82bQY3V5PX-re8U2MWWA0XnJ51tBVTlcr1jQ'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });