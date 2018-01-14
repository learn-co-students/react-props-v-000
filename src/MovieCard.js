import React from 'react';
 
class MovieCard extends React.Component {
  render() {
    return (
      <div>

        <img src={this.props.movie.poster} width='150px' height='150px' alt={this.props.movie.title} />
        <h2>{this.props.movie.title}</h2>
        <p>Genres: {this.props.movie.genres}</p>

{/* 
        <img src={this.props.poster} width='150px' height='150px' alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <p>Genres: {this.props.genres}</p> */}

      </div>
    );
  }
}

MovieCard.defaultProps = {
  poster: 'http://res.cloudinary.com/smithwebtek/image/upload/v1501075899/brad_cartoon_bbtjmz.jpg'
};

export default MovieCard;
