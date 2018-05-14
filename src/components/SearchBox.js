import React from 'react';

class SearchBox extends React.Component {
 
  render() {
   return(
    <form onSubmit={this.props.handleSubmit}>
        <label>
          Enter Zipcode: <input type="text" value={this.props.searchRequest}  onChange={this.props.handleChange} />
        </label>
      </form>


   )
  }
}

export default SearchBox;