import React from "react";
import SearchForm from "./SearchForm";
// import MusicVideoPlayer from "./MusicVideoPlayer";
import VideoTextToggle from "./VideoTextToggle";
import davePortrait from "../img/DavePortrait.png";
import Footer from "./Footer";
import "./IntroPage.css";

export default props => {
	return (
		<main className="intro">
			<div className="intro-row-1">
				<div className="intro-picture">
					<img alt="Portrait of Dave Grohl with Guitar" src={davePortrait} className="intro-dave-img"/>					
				</div>
				<div className="intro-header">
				The Best Reviews
				</div>
			</div>
			<div className="intro-row-3">

				<VideoTextToggle />

			</div>
			<div className="intro-row-2">
				<SearchForm
					{...props}
					handleSearchBoxChange={props.handleSearchBoxChange}
				/>
			</div>
			<Footer />
		</main>
	);
};
