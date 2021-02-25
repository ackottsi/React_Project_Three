import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';
import Search from './Search';
import Login from './Login';


const Header = (props) => {

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
              <div className="headerMiddle">
                <Link className="headerLink" to="/">Home</Link>
                <Link className="headerLink" to="/News">News</Link>
                <Search />
                <Link className="headerLink" to="/">Movie List</Link>
                <Link className="headerLink" to="/WatchList">Watch List</Link>
              </div>
            </div>
            <div className="HeaderLoginContainer">
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

