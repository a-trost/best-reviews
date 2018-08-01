import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "./SearchForm.css";

// We can inject some CSS into the DOM.
const styles = {
	button: {
		background: "linear-gradient(45deg, #F2863D 30%, #FF8E53 90%)",
		color: "white",
	},
	buttonDisabled: {
		color: "#aaa",
		background: "#ddd",
	},
};

class SearchForm extends Component {
	render() {
		return (
			<div className="search-container box-shadow">
				<form
					noValidate
					onSubmit={this.props.handleSubmit}
					className="search-box-form"
				>
					<div>
						I want <span className="body-the-best">The Best Reviews</span> for{" "}
						<FormControl>
							<InputLabel htmlFor="category">Category</InputLabel>
							<Select
								value={this.props.category}
								onChange={this.props.handleCategoryChange}
								inputProps={{
									name: "category",
									id: "category",
								}}
							>
								<MenuItem value="shopping">Shopping</MenuItem>
								<MenuItem value="funPlaces">Fun</MenuItem>
								<MenuItem value="services">Services</MenuItem>
							</Select>
						</FormControl>
						in{" "}
						<TextField
							type="number"
							className="search-box"
							id="with-placeholder"
							label="Enter Zip Code"
							aria-required="true"
							placeholder="12345"
							name="zipcode"
							margin="normal"
							value={this.props.searchLocation}
							onChange={this.props.handleSearchBoxChange}
						/>{" "}
						<Button
							style={{
								...(this.props.searchLocation.length === 5
									? styles.button
									: styles.buttonDisabled),
							}}
							variant="raised"
							color="primary"
							type="submit"
							disabled={this.props.searchLocation.length !== 5}
						>
							Go!
						</Button>
						{this.props.formError && (
							<FormHelperText
								className="error-text"
								error
								class="errors"
								role="alert"
								aria-relevant="all"
							>
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
		formError: state.formError,
	};
};

export default connect(mapStateToProps)(withStyles(styles)(SearchForm));
