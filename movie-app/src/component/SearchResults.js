import React, { Component } from 'react';
import Search from './Search';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
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
  //in the search bar
  componentDidMount= async (props) => {
    const movieSearch = this.props.location.state.title
    const movieData1 = await axios.get(`http://www.omdbapi.com/?apikey=38e29c7e&s=${movieSearch}`)
    const resultsString=movieData1.data.Response;
    console.log(movieData1)
   
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
    })
    }

  }


  //component did Update handles all subsequent searches after initial search
  componentDidUpdate= async (prevProps)=>{
    
    // console.log(prevProps.location)
    // console.log(this.props.location)
    if(this.props.location.state.title!==prevProps.location.state.title){
      
    // console.log("component did update ran!")
    const movieSearch = this.props.location.state.title
    const movieData1 = await axios.get(`http://www.omdbapi.com/?apikey=38e29c7e&s=${movieSearch}`)
    const resultsString=movieData1.data.Response;
    console.log(movieData1.data.Response)

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
           })
        }
 
     }
 
   }
  
       

  render() {
    // console.log(this.state.movieData)
    console.log(this.state.searchResponse)
  
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
                      pathname: `./SearchDetail/`,
                      state: { titledata: movie.imdbID },
                    }}>
                      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                  </Link>
                  {/* {console.log(movie.imdbID)} */}
                </div>
                <Link 
                    to={{
                      pathname: `./SearchDetail/`,
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
              <h3>data not loaded</h3>
              }
            </div>
      </div>         
  

          )



  }

}
export default SearchResults;


