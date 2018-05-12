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
  <p>
          What people are saying:
        </p>
        <p>
          "Why did you make this?"
        </p>
      </div>
    );
  }
}

export default App;
