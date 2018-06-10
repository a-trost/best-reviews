import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
	return(
		<header className="App-header">
			<Link to="/"> <p>Go Back</p> </Link>
			<h1 className="App-title">The Best Reviews</h1>
		</header>
	);
}

export default Header;