import React from 'react';
 
class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.poster} width='150px' height='150px' alt={this.props.movie.title} />
        <h2>{this.props.movie.title}</h2>
        <p>Genres: {this.props.movie.genres}</p>
      </div>
    );
  }
}

export default MovieCard;
