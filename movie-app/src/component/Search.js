import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';


class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title:'',
      valid: false
    }
  }

//The valid indicator is used to confirm if a search was executed.  
//Once true, the logic in the render function will Re-direct to search results

  searchConfirm = (e) => {
    e.preventDefault()
    this.setState({
      valid:true     
    });
  }



  handleChange = (evt) => {
    console.log(this.props)
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value,
      valid:false   //added this logic to prevent trying to render on
                    // every character entry in the search box.  the serch
    })              //needs to be submitted by pressing enter, which then invokes
                    //the searchConfirm method.

  }



  render() {
    console.log("search js ran")
    console.log(this.state.valid)
    return (
      <div className="movieSearch">
        <form className="searchForm" onSubmit={this.searchConfirm}>
          <div id="searchBar">
            <input id="searchField"
              type="text"
              name="title"
              placeholder="Search..."
              onChange={this.handleChange}
            />
            <input id="searchButton"
              type="submit"
              value=""
            />
          </div>          
        </form>
     
          { this.state.valid ? <Redirect 
            to={{
              pathname:"./SearchResults",
              state: { title: this.state.title},
            }} 
          />
            : ''
          }
      </div>
    )
  }
}

export default Search;