import React from "react";
import "./Footer.css";

export default props => {
	return (
		<footer className="footer">
			<div className="footer-item">
				<a href="https://atrost.com" target="_blank" rel="noopener noreferrer">
          Made By Alex Trost
				</a>
			</div>

			<div className="footer-item">
				<a
					href="https://github.com/a-trost"
					target="_blank"
					rel="noopener noreferrer"
				>
          My Github
				</a>
			</div>
			<div className="footer-item">
				<a
					href="https://www.flickr.com/photos/track24/8327822421/"
					target="_blank"
					rel="noopener noreferrer"
				>
          Photo Credit
				</a>
			</div>
		</footer>
	);
};
