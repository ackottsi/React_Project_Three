import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieList.css';

const MovieList = (props) => {
  return (
    <div className="movieList">
      {props.movieData.map(movie => (
        <div key={movie.imdbID} className="movieCard">
          <div className="movieCardImageContainer">
            <Link to={`/MovieDetail/${movie.Title}`}>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            </Link>
          </div>
          <Link to={`/MovieDetail/${movie.Title}`}>
            <div className="movieCardTitle">
              {movie.Title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MovieList;