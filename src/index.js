// Code goes here
import React from "react";

export default class MovieCard extends React.Component{

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};


ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
    genres={jurassicWorldGenres}
  />,
  document.getElementById('root')
);
}
