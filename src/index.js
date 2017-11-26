import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

const movies = [
  {
    title: "Mad Max: Farty Road",
    poster: "http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg", 
    genres: madMaxGenres
  }, 
  
  {
    title:'Brad the Movie', 
    poster: 'https://res.cloudinary.com/smithwebtek/image/upload/r_28/v1492532740/misc/bradsmith-swt.jpg', genres: ["webumentary", 'chick flick']}
  ]
  

ReactDOM.render(
    <Movies movies={movies}/>,
  document.getElementById('root')
)