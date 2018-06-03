import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchRequest: this.props.searchRequest ? this.props.searchRequest : "",
      error: ""
    };
  }
  render() {
    return (
      <div>
        <form
          noValidate
          onSubmit={this.props.handleSubmit}
          className="search-box-form"
        >
          <div>
            I want The Best Reviews for{" "}
            <select
              className="intro-form intro-form-select"
              name="category"
              id="category"
              value={this.props.searchCategory}
              onChange={this.props.handleCategoryChange}
              
            >
              <option value="shopping">&nbsp;Shopping</option>
              <option value="food">&nbsp;Food</option>
              <option value="funPlaces">&nbsp;Fun</option>
              <option value="services">&nbsp;Services</option>
            </select>{" "}
            in{" "}
            <TextField
              autoFocus
              className="search-box"
              id="with-placeholder"
              label="Enter Zip Code"
              placeholder="Placeholder"
              margin="normal"
              value={this.props.searchRequest}
              onChange={this.props.handleSearchBoxChange}
            />{" "}
            .<Button variant="raised" color="primary" type="submit">
              Go!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
