import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

const madMaxGenres = ['Action ', 'Adventure ', 'Science Fiction ', 'Thriller'];

const movies = [
  { title: "Mad Max: Farty Road",
    poster: "http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg", 
    genres: madMaxGenres}, 
    
    { title:'Dumb and Dumber', 
    poster: 'https://www.macxdvd.com/mac-dvd-video-converter-how-to/article-image/dumb-and-dumber-comedy.jpg', 
    genres: ['Comedy ', 'Road Trip']},
    
    { title:'Meet the Parents', 
    poster: 'https://i.pinimg.com/736x/3b/0d/71/3b0d711f1ba6d4e99b4b76f836bc93a4--romantic-movies-best-romantic-comedies.jpg', 
    genres: ["Webumentary", 'Chick Flick']},
    
    { title:'Brad the Movie', 
      poster: 'https://res.cloudinary.com/smithwebtek/image/upload/r_28/v1492532740/misc/bradsmith-swt.jpg', 
      genres: ["Webumentary ", 'Chick Flick']}
  ]

ReactDOM.render(
    <Movies movies={movies}/>,
  document.getElementById('root')
)
