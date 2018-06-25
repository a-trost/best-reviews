import React from "react";
import SearchForm from "./SearchForm";
import VideoPlayer from "./VideoPlayer";
import davePortrait from "../img/DavePortrait.png";
import Footer from "./Footer";
import "./IntroPage.css";

export default props => {
	return (
		<div className="intro">
			<div className="intro-row-1">
				<div className="intro-picture">
					<img alt="Portrait of Dave Grohl with Guitar" src={davePortrait} className="intro-dave-img"/>					
				</div>
				<div className="intro-header">
				The Best Reviews
				</div>
			</div>
			<div className="intro-row-2">
				<SearchForm
					{...props}
					handleSearchBoxChange={props.handleSearchBoxChange}
				/>
			</div>
			<div className="intro-row-3">
				<div className="intro-description-container">
					<div className="intro-description-text">
						<p>
          Dave Grohl been in some of <span className="body-the-best">the best</span>{" "}
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
			<Footer />
		</div>
	);
};
