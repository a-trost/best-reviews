import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../img/backIcon.png";
import logo from "../img/logo.png";


function Header(props) {
	return(
		<header className="header">
			<div className="header-icons">
				<Link to="/"> <img src={backIcon} alt="Back Arrow" /> </Link>
			</div>
			<div className="header-title-container">
				<img src={logo} alt="The Best Reviews" className="header-title" />
			</div>
			<div className="header-icons">
			</div>
		</header>
	);
}

export default Header;