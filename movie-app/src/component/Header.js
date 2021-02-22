import React, { Component } from 'react';
import '../Header.css';


const Header = (props) => {


  return (


<div>
    <header>

  

      <nav>
      <ul>
        <li><a className="headerLink">Home</a></li>
        <li><a className="headerLink">News</a></li>
        <li><a className="headerLink">Contact</a></li>
        <li><a className="headerLink">About</a></li>
        <li><a className="headerLink">LogIn/SignIn</a></li>
  
      </ul>

      </nav>
    <div>
      <img className="logo" src="https://i.imgur.com/zJg4M4I.png?1"></img>
    </div>
    <div>
      <div className="title">
        <h1 className="title1">Couch </h1>
        <h1 className="title2">Sloth</h1>
        <h1 className="title1"> Movie App</h1>
      </div>
    </div>
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