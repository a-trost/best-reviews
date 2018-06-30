import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../img/backIcon.png";
import logo from "../img/logo.png";
import "./Header.css";


function Header(props) {
	return(
		<header className="header">
			<div className="header-icons">
				<Link to="/" > <img src={backIcon} alt="Back Arrow" role="navigation" name="back arrow"/> </Link>
			</div>
			<div className="header-logo-container">
				<img src={logo} alt="The Best Reviews" className="header-logo" />
			</div>
			<div className="header-icons">
			</div>
		</header>
	);
}

export default Header;