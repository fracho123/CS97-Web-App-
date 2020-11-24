import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Day } from './calendar.js'
import { SearchBar } from './searchBar.js'
import { UpcomingAssignments } from './assignments.js'

//const express = require('express');
// const app = express();

// app.use((req, res) => {
//   res.send('<h1>IS THIS WORKING?<h1>');
// })

// app.listen(3000, () => {
//   console.log("LISTENING!");
// })

class Textbox extends React.Component {
    render (){
    return (
	<div className= "header">
	    <div className= "logo">{"NEW CCLE"}</div>
        <ul>
        <ul>
        <ul>
        </ul>
        </ul>
        </ul>
    <div className='row1'>
        <UpcomingAssignments/>
        <Calendar />
    </div>
    <div>
      <SearchBar />
    </div>
    </div>
    
      );
    }
}

class Calendar extends React.Component {
    render() {
      return (
        // <div className= "searchBar">
        //     <SearchBar />
        <div className="calendar">
          <div className="calendar-days">
            <Day />
          </div>
          <br></br>
          <div className="calendar-buttons">
            <ol>{/* TODO */}</ol>
          </div>
          {/* <div className="searchBar">
            <SearchBar />
          </div> */}
        </div>
      
      //</div>
    );
  }
}



ReactDOM.render(
        <Textbox />,
		document.getElementById('root')
);
