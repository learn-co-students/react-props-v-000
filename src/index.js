import React from 'react';
import ReactDOM from 'react-dom';

const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
const{poster, title, genres}=this.props

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={poster}
          alt={title}
        />
        <h2>{title}</h2>
        <small>Genres: {genres.join(', ')}</small>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};

ReactDOM.render(
  <MovieCard
    title="Mad Max: Fury Road"
    poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    genres={madMaxGenres}
  />,
  document.getElementById('root')
);

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    genres={jurassicWorldGenres}
  />,
  document.getElementById('root')
);
