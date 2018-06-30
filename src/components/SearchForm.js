import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import { connect } from "react-redux";
import "./SearchForm.css";

class SearchForm extends Component {
	render() {
		return (
			<div className="search-container">
				<form
					noValidate
					onSubmit={this.props.handleSubmit}
					className="search-box-form"
				>
					<div>
            I want <span className="body-the-best">The Best Reviews</span> for{" "}
						<select
							className="intro-form intro-form-select"
							name="category"
							id="category"
							value={this.props.category}
							onChange={this.props.handleCategoryChange}
						>
							<option value="shopping">&nbsp;Shopping</option>
							<option value="funPlaces">&nbsp;Fun</option>
							<option value="services">&nbsp;Services</option>
						</select>{" "}
            in{" "}
						<TextField
							className="search-box"
							id="with-placeholder"
							label="Enter Zip Code"
							placeholder="12345"
							margin="normal"
							value={this.props.searchLocation}
							onChange={this.props.handleSearchBoxChange}
						/>{" "}
						<Button
							variant="raised"
							color="primary"
							type="submit"
							disabled={this.props.searchLocation.length !== 5}
						>
              Go!
						</Button>
						{this.props.formError && (
							<FormHelperText className="error-text" error>
								{this.props.formError}
							</FormHelperText>
						)}
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchLocation: state.searchLocation,
		category: state.category,
		formError: state.formError
	};
};

export default connect(mapStateToProps)(SearchForm);
