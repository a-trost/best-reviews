import React from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBox extends React.Component {
 
  render() {
   return(
     <div className="search-box">
    <form noValidate onSubmit={this.props.handleSubmit} className="search-box-form">
    <TextField
          autoFocus
          className="search-box"
          id="with-placeholder"
          label="Enter Zip Code"
          placeholder="Placeholder"
          margin="normal"
          value={this.props.searchRequest}
          onChange={this.props.handleSearchBoxChange}
        />
      </form>
      </div>
   )
  }
}

export default SearchBox;