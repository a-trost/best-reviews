import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }
  render() {
    return <input ref="input" {...this.props} type="text" size="100"/>;
  }
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new window.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    // https://developers.google.com/maps/documentation/javascript/events#removing
    window.google.maps.event.clearInstanceListeners(this.searchBox);
  }
}

export default SearchBox;