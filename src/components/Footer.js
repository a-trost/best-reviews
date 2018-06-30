import React from "react";
import "./Footer.css";

export default props => {
	return (
		<footer className="footer">
			<div className="footer-item">Copyright © Alex Trost 2018</div>

			<div className="footer-item">
				<a href="https://atrost.com" target="_blank" rel="noopener noreferrer">ATrost.com</a>
			</div>

			<div className="footer-item">
				<a href="https://github.com/a-trost" target="_blank" rel="noopener noreferrer">Github</a>
			</div>
		</footer>
	);
};
