import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Best Reviews</h1>
        </header>
  <SimpleMap />
      </div>
    );
  }
}

export default App;
