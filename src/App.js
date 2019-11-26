import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogContainer from './containers/HogContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <HogContainer />
      </div>
    )
  }
}

export default App;
