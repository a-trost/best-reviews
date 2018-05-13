import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap';
import SearchBox from './components/SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Best Reviews</h1>
        </header>
<SearchBox />
  <SimpleMap />
      </div>
    );
  }
}

export default App;
