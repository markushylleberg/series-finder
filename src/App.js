import React, { Component } from 'react';
import NavBar from './components/layout/Navbar';
import Main from './components/main/Main';
import 'whatwg-fetch';
import './App.css';


class App extends Component {


render () {
  return(
    <div className="App container">
        <NavBar />
        <Main />
    </div>
  )
  }
}

export default App;
