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
        <p>
          I'M ONLY GIVING THE BEST, THE BEST, THE BEST, THE BEST REVIEWS.
        </p>
  <SimpleMap />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
