import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../SearchResults.css'

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchTerm: "",
      movieData:[],
      apiDataLoaded: false,
      titledata: [],
      searchResponse:false
    }
  }

  //componentDidMount is needed to handle the first search
  //in the search bar on initial render.
  componentDidMount= async (props) => {
    const movieSearch = this.props.location.state.title
    const movieData1 = await axios.get(`https://www.omdbapi.com/?apikey=38e29c7e&s=${movieSearch}`)
    const resultsString=movieData1.data.Response;
    if(resultsString==="False"){  //resultsString is a value being returned from the api.  
                                  //the state of searchResponse is set to the boolean equivalent 
                                  //of the string.  The boolean value of searchResponse is used below
                                  //in the render for a conditional rendering condition  
      this.setState ({
        searchTerm: movieSearch,
        movieData: movieData1.data.Search,
        apiDataLoaded: true,
        searchResponse:false
      });
    }

    else {this.setState ({
        searchTerm: movieSearch,
        movieData: movieData1.data.Search,
        apiDataLoaded: true,
        searchResponse:true
    })};
  }
 
  //component did Update handles all subsequent searches after initial search
  componentDidUpdate= async (prevProps)=>{

    if(this.props.location.state.title!==prevProps.location.state.title){
  
      const movieSearch = this.props.location.state.title
      const movieData1 = await axios.get(`https://www.omdbapi.com/?apikey=38e29c7e&s=${movieSearch}`);
      const resultsString=movieData1.data.Response;

      if(resultsString==="False"){
    
        this.setState ({
        searchTerm: movieSearch,
        movieData: movieData1.data.Search,
        apiDataLoaded: true,
        searchResponse:false
        })
      }

      else {this.setState ({
        searchTerm: movieSearch,
        movieData: movieData1.data.Search,
        apiDataLoaded: true,
        searchResponse:true
      })};  
    }
  }

//added the ternary below in render to prevent "cannot map undefined error".  when the api is queried, if there are too many results, or no results, it returns a response value of False.  the logic statements in componentDidMount and componentDidUpdate put this value to use.  if the query to the data base returns false, a message of "No Results Found" will be displayed.
      
  render() {  
    return (
      <div>
        <div>
            {this.state.searchResponse ? 
              <div className="resultsList">
                      <h1>{`search results for "${this.state.searchTerm}"...`}</h1>
                      {this.state.movieData.map(movie => (
                        <div key={movie.imdbID} className="resultsCard">
                            <div className="resultsCardImageContainer">
                              <Link 
                                to={{
                                  pathname: `/SearchDetail/`,
                                  state: { titledata: movie.imdbID },
                                }}>
                                  <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                              </Link>
                            </div>
                          <Link 
                              to={{
                                pathname: `/SearchDetail/`,
                                state: { titledata: movie.imdbID },
                              }}>
                              <div className="resultsCardTitle">
                                {movie.Title}
                              </div>
                          </Link>
                        </div>
                      ))}
              </div>
            :
              <h3>No Results Found</h3>
            }
        </div>
      </div>         
    )
  }
}

export default SearchResults;


