import React from 'react';
import MovieCard from './MovieCard';
  
class Movies extends React.Component {
  render() {

    const renderedMovies = this.props.movies.map((movie, index) => {

      return <MovieCard movie={movie} key={index} />

      // return <MovieCard title={movie.title} poster={movie.poster} genres={movie.genres} key={index} />
      
    });

    return (
      <div>
        <fieldset width='300px' >
          {renderedMovies}
        </fieldset>
      </div>
    )
  }
}

export default Movies;
