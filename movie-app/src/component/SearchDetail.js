import axios from 'axios';
import React, { Component } from 'react';
import '../MovieDetail.css';
import SearchResults from './SearchResults';

class SearchDetail extends Component {
  constructor(props) {
    super(props)
    this.state={
      movieData:[],
      apiDataLoaded: false,
    }
  }

  componentDidMount = async(props) => {
    const titleData = this.props.location.state.titledata
    // console.log(titleData)
    const movieData1 = await axios.get(`http://www.omdbapi.com/?apikey=38e29c7e&i=${titleData}`)

    // console.log(movieData1.data)

    this.setState ({
      movieData: movieData1.data,
      apiDataLoaded: true
    })
  }




  render() {
    // console.log("look at this!!!")
    return (
      <div className="movie-detail-container">
        <div className = "movie-detail">
          {this.state.apiDataLoaded ? (
            <div>
              <div className="name-title">
                <h2>{this.state.movieData.Title}</h2>
              </div>
              <div className="ratings">
                {this.state.movieData.Ratings.map((ratings, index) => 
                  <div key={index}>
                    <h5>{ratings.Source}:</h5>
                    <h5 className="rating-value">{ratings.Value}</h5>
                  </div>
                )}
              </div>
              <div className="detail-wrapper">
                <div className="poster">
                  <img src={this.state.movieData.Poster} alt="movie poster" />
                </div>
                <div className="plot-summary">  
                  <h3 className="plot">{this.state.movieData.Plot}</h3>
                  <h3>Actors/Cast</h3>
                  <p>{this.state.movieData.Actors}</p>
                  <h3>Director</h3>
                  <p>{this.state.movieData.Director}</p>
                  <h3>Languages</h3>
                  <p>{this.state.movieData.Language}</p>
                </div>
              </div>
              <div className="various">
                <div className="var-div">   
                  <h5>Genre:</h5><h5 className="h-var">{this.state.movieData.Genre}</h5>
                </div>  
                <div className="var-div">   
                  <h5>Release Date:</h5><h5 className="h-var">{this.state.movieData.Released}</h5>
                </div>  
                <div className="var-div"> 
                  <h5>Runtime:</h5><h5 className="h-var">{this.state.movieData.Runtime}</h5>
                </div>  
              </div>
              
              
              
            </div>  
          ) :
          <p>Movie detail not loaded</p>
          }
        </div>
      </div>
    )
  }  
}

export default SearchDetail;