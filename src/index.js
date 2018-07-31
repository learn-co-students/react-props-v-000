import React from 'react'
import ReactDOM from 'react-dom'

class MovieCard extends React.Component{
  render(){
    return(
      <div className="movieCard">
        <img
        src ={this.props.poster}
        alt={this.props.title} />
        <h2>{this.props.title} </h2>
        <small>{this.props.genres.join(", ")}</small>
      </div>
    )
  }
}

MovieCard.defaultProps = {
  poster: "http://i.imgur.com/bJw8ndW.png"
}

const madMaxGenres = ["action", "adventure", "Science Fiction", "Thriller"]

ReactDOM.render(
  <MovieCard
  title="Mad Max: Fury Road"
  genres={madMaxGenres}
  />,
  document.getElementById('root')
)
