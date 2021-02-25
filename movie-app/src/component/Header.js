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
              <Link className="headerLink" to="/">Movie List</Link>
              <Link className="headerLink" to="/WatchList">Watch List</Link>
              {/* <Link className="headerLink" to="/Login">LogIn</Link> */}
              <Login/>
            </div>
            </div>
            <div className="headerBottomBorder"></div>
          </nav>
        
    </header>
  </div>
  )
}

export default Header;

