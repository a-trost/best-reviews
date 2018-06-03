/* Contains the state for the App and routes to the pages */
import React, { Component } from 'react';
import {Route, Link, Switch, withRouter} from 'react-router-dom';
import './App.css';
import SearchResultsPage from './components/SearchResultsPage';
import IntroBox from './components/IntroBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoToggle = this.handleVideoToggle.bind(this);
    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.state = {
        showVideo:false,
        searchRequest:"06355",
        searchCategory:"shopping",
      };
  }

  handleVideoToggle() {
    this.setState((prevState) => ({
      showVideo:! prevState.showVideo
    }))
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.location.pathname === "/search") {
      console.log("We're at the search page!")
    } else if (this.props.location.pathname === "/") {
      this.props.history.push('/search');
    }
    // this.getLatLng();
  }

  handleSearchBoxChange(event) {
    this.setState({searchRequest: event.target.value});
  }

  handleCategoryChange(event) {
    this.setState({searchCategory:event.target.value}, this.getLatLng);
  }


  render() {
    return (
      <Switch>
      <Route exact path='/' render={(props) => <IntroBox 
       {...props}
        handleSubmit={this.handleSubmit} 
        handleCategoryChange={this.handleCategoryChange}
        handleSearchBoxChange={this.handleSearchBoxChange} 
        searchRequest={this.state.searchRequest}
        searchCategory={this.state.searchCategory}
        showVideo={this.state.showVideo}
        handleVideoToggle={this.handleVideoToggle}
        />} />
      <Route
        path='/search'
        render={(props) => <SearchResultsPage 
        {...props}
        handleSubmit={this.handleSubmit} 
        handleSearchBoxChange={this.handleSearchBoxChange}
        searchRequest={this.state.searchRequest}
        handleCategoryChange={this.handleCategoryChange}
        searchCategory={this.state.searchCategory}
        showVideo={this.state.showVideo}
        handleVideoToggle={this.handleVideoToggle}
        />}
      />
    </Switch>
    );
  }
}

export default withRouter(App);
