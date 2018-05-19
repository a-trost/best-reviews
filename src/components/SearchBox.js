import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class SearchBox extends React.Component {
 
  render() {
    const { classes } = this.props;
   return(
    <form noValidate onSubmit={this.props.handleSubmit} className="search-box-form">
    <TextField
          autoFocus
          className="search-box"
          id="with-placeholder"
          label="Enter Zip Code"
          placeholder="Placeholder"
          margin="normal"
          value={this.props.searchRequest}
          onChange={this.props.handleChange}
        />
      </form>


   )
  }
}

export default SearchBox;