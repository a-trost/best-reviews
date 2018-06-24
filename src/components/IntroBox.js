import React from "react";
import SearchForm from "./SearchForm";
import VideoPlayer from "./VideoPlayer";
import davePortrait from "../img/DavePortrait.png";
import "./IntroBox.css";

export default props => {
	return (
		<div className="intro">
			<div className="intro-row-1">
				<div className="intro-picture">
					<img alt="Portrait of Dave Grohl with Guitar" src={davePortrait} className="intro-dave-img"/>					
				</div>
				<div className="intro-header">
					This is
					<br />
					Dave Grohl
				</div>
			</div>
			<div className="intro-row-2">
				<div className="intro-description-container">
					<div className="intro-description-text">
						<p>
          He's been in some of <span className="body-the-best">the best</span>{" "}
          bands like Nirvana and the Foo Fighters. He's been to all of{" "}
							<span className="body-the-best">the best</span> places around the
          country.
						</p>
						<p>
          Dave Grohl only reviews{" "}
							<span className="body-the-best">the best</span> places, and now{" "}
							<span className="body-the-best">the best</span> reviews are available
          to you.
						</p>
					</div>
					<VideoPlayer
						handleVideoToggle={props.handleVideoToggle}
						showVideo={props.showVideo}
					/>
				</div>
			</div>
			<div className="intro-row-3">
				<SearchForm
					{...props}
					handleSearchBoxChange={props.handleSearchBoxChange}
				/>
			</div>
			<div className="intro-row-4">
				<a href="https://www.flickr.com/photos/track24/8327822421/">
            Photo Credit
				</a>
			</div>
		</div>
	);
};
