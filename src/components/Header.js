import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../img/backIcon.png";

function Header(props) {
	return(
		<header className="header">
			<div className="header-icons">
				<Link to="/"> <img src={backIcon} alt="Back Arrow" /> </Link>
			</div>
			<div className="header-title-container">
				<h1 className="header-title">The Best Reviews</h1>
			</div>
			<div className="header-icons">
			</div>
		</header>
	);
}

export default Header;