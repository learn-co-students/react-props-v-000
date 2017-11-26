import React from 'react';
import MovieCard from './MovieCard';
  
class Movies extends React.Component {
  render() {

    const renderedMovies = this.props.movies.map((movie, index) => {
      return <MovieCard movie={movie} key={index} />
    });

    return (
      <div>
        {renderedMovies}
      </div>
    )
  }
}

export default Movies;
