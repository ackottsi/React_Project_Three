import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../Header.css';
import Articles from './Articles';
import Search from './Search';
import Login from './Login';


const Header = (props) => {
  console.log(props)


  return (  
<div>
    <header>
      
  
      <nav>
        <div className="Nav-Login">
        <div className="headerNav">
          <div className="logoTitleHeader">
            <img className="logoNav" src="https://i.imgur.com/zJg4M4I.png?1"></img>
            <div className="navTitle">
              <h1 className="title1">couch </h1>
              <h1 className="title2">Sloth</h1>
            </div>
          </div>
          <Link className="headerLink" to="/">Home</Link>
          <Link className="headerLink" to="/News">News</Link>
          <Search />
          <Link className="headerLink" to="/">Movie List Page</Link>
          <Login className="Login-Form"/>
        </div>
       
        </div>
        <div className="headerBottomBorder"></div>
      </nav>
      
    {/* <div>
      <img className="logo" src="https://i.imgur.com/zJg4M4I.png?1"></img>
    </div>
    <div>
      <div className="title">
        <h1 className="title1">Couch </h1>
        <h1 className="title2">Sloth</h1>
        <h1 className="title1"> Movie App</h1>
      </div>
    </div> */}
    
        
</header>
  </div>
  )
}

export default Header;



/*




  console.log(props.movieData);
  


    <div>
          
            {props.movieData.map(movieData => (
          <div className="headerPoster">
            
            <img className="headerPost" scr="{movieData.Poster}"></img>
            <h3>{movieData.Title}  </h3>
          </div>

          ))}
    </div>

    */