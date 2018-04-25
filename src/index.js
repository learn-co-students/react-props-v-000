import React from 'react'
import ReactDOM from 'react-dom'

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(", ")}</small>
      </div>
    );
  }
}

// passing in a default property
MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};


// pass props to a component by adding them as attributes when you render it
// - the VALUE of a prop is passed in through curly braces (variable, inline values, functions)
// - if the VALUE == hardcoded string, you can pass it through double quotes
const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
ReactDOM.render(
  <MovieCard
    title = "Jurrasic World"
    poster = "http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
    genres = {jurassicWorldGenres}
  />,
  document.getElementById('root')
);
