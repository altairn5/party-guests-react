import React, { Component } from 'react';
import './App.css';
import PageList from './components/pages/guestList'
// console.log("REACT===>", React)

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageList />
      </div>
    )
  }
}

export default App;
