import React from 'react';
import '../MovieDetail.css';

const MovieDetail =(props) => {
  const foundMovie = props.movieData.find(movie=>{
    return movie.Title === props.match.params.Title;
  });
         
    
    return (
        <div className = "movie-detail-container">
          {foundMovie ? (
            <div className = "movie-detail">
              <div className="name-title">
                <h2>{foundMovie.Title}</h2>
              </div>
              <div className="ratings">
                {foundMovie.Ratings.map((ratings, index) => 
                  <div key={index}>
                    <h5>{ratings.Source}:</h5>
                    <h5 className="rating-value">{ratings.Value}</h5>
                  </div>
                )}
              </div>
              <div className="detail-wrapper">
                <div className="poster">
                  <img src={foundMovie.Poster} alt="movie poster" />
                </div>
                <div className="plot-summary">  
                  <h3 className="plot">{foundMovie.Plot}</h3>
                  <h3>Actors/Cast</h3>
                  <p>{foundMovie.Actors}</p>
                  <h3>Director</h3>
                  <p>{foundMovie.Director}</p>
                  <h3>Languages</h3>
                  <p>{foundMovie.Language}</p>
                </div>
              </div>
              <div className="various">
                <div className="var-div">  
                  <h5>Genre:</h5><h5 className="h-var">{foundMovie.Genre}</h5>
                </div>
                <div className="var-div">
                  <h5>Release Date:</h5><h5 className="h-var">{foundMovie.Released}</h5>
                </div>
                <div className="var-div">
                  <h5>Runtime:</h5><h5 className="h-var">{foundMovie.Runtime}</h5>
                </div>
                <div className="var-div">
                  <button className="add-btn" onClick={() => props.addToWatchList(foundMovie)}>
                  &#43; Add to Watchlist
                  </button>
                </div>
              </div>
            </div>  
          ) :
          <p>Movie detail not loaded</p>
          }
        </div>
    
    )
    
}

export default MovieDetail;