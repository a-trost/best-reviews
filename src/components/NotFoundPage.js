import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => (
	<div className="container">
		<p className="four-oh-four">404!</p>
		<Link to="/" className="go-home" >GO HOME</Link>
	</div>
);


export default NotFoundPage;