import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './component/Header';
import MovieList from './component/MovieList';
import MovieDetail from './component/MovieDetail';
import Footer from './component/Footer';
import {Route, Link, Switch} from 'react-router-dom';
import Login from './component/Login'
import Search from './component/Search';
import SearchResults from './component/SearchResults';
import Register from './component/Register';
import SearchDetail from './component/SearchDetail';
import Articles from './component/Articles';
import WatchList from './component/WatchList';

//api key 38e29c7e

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      movieData:[],
      news: [],
      watchList: [],
      apiDataLoaded: false
    }
  }

  componentDidMount=async ()=>{
    const movieData1=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=top+gun")
    const movieData2=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=blade+runner")
    const movieData3=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=blazing+saddles")
    const movieData4=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=inception")
    const movieData5=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=caddyshack")
    const news = await axios.get("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=e444bb227c874f1f850afa4ab753e1fc")
    
    const movieData = [
      movieData1.data,
      movieData2.data,
      movieData3.data,
      movieData4.data,
      movieData5.data,
    ];

    //console.log(news.data.articles);
    this.setState ({
      movieData: movieData,
      news: news.data.articles,
      apiDataLoaded: true
    })
  }
  addToWatchList = (foundMovie) => {
    const addMovieToList = this.state.watchList;
    addMovieToList.push(foundMovie);
    
    this.setState({
      watchList: addMovieToList
    })
  };  

  render(){
    console.log(this.state.movieData.Title)
    console.log(this.state.news)
    console.log(this.props)
  return (
    <div>
      {this.state.apiDataLoaded ?  
        <div className="App">
        <Header  movieData={this.state.movieData} />


        

          
       

          {/* The line below is for testing purposes.  The links for each detail page will be created in the list page*/}
          {/* <Link to="/MovieDetails">Movie Details Page</Link> */}

          <Switch>
          <Route exact path="/" render={(routerProps)=>(
              <MovieList movieData={this.state.movieData} {...routerProps}/>
          )}/>

          <Route path="/MovieDetail/:Title" render={(routerProps)=>(        
          <MovieDetail movieData={this.state.movieData} addToWatchList={this.addToWatchList} {...routerProps} />
          )}/>

          <Route path="/SearchDetail" render={(routerProps) => (
            <SearchDetail {...routerProps} />
          )} />

          <Route exact path="/Login" render={(routerProps)=>(        
          <Login {...routerProps}/>
          )}/>

          <Route exact path="/SearchResults" render={(routerProps) => (
            <SearchResults {...routerProps}/>
          )}/>

          <Route path="/WatchList" render={(routerProps) => (
            <WatchList watchList={this.state.watchList}  {...routerProps} />
          )}/>  

          <Articles news={this.state.news} />
        

          {/* line below will be used when login functionality is created */}
          {/* <Route exact path="/Login" component={Login}/> */}
          
          <Route exact path="/Register" render={(routerProps)=>(
          <Register {...routerProps}/>
          )}/>

           
        
          </Switch>
       

          <Footer />

        </div>
        : <p>data not loaded test</p>
      }
    </div>
  );
}
}

export default App;
