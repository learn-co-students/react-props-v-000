import React from 'react';
import ReactDom from 'react-dom'

class MovieCard extends React.Component {
  render() {
    return(
      <div className="movie-card">
      <img
        src={this.props.poster}
        alt={this.props.title}
        />
      <h2>{this.props.title}</h2>
      <small>Genres: {this.props.genres.join(', ')}
      </small>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};

const jurrasicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDom.render(
  <MovieCard title = "Jurrasic World"

  poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
  genres={jurrasicWorldGenres}
  />,
  document.getElementById('root')
);
