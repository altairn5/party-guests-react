import React, { Component } from 'react';
import './App.css';
import PageList from './components/pages/guestList'
import TopBar from './components/partials/top-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <PageList />
      </div>
    )
  }
}

export default App;
