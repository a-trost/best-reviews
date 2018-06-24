import React from "react";
import SearchForm from "./SearchForm";
import VideoPlayer from "./VideoPlayer";
import davePortrait from "../img/DavePortrait.png";


export default (props) => {
	return (
		<div>
			<h1>This is Dave Grohl.</h1>
			<img alt="Portrait of Dave Grohl with Guitar" src={davePortrait} />
			<a href="https://www.flickr.com/photos/track24/8327822421/">Photo Credit</a>
			<p>
        He's been in some of <span className="body-the-best">the best</span>{" "}
        bands like Nirvana and the Foo Fighters. He's been to all of{" "}
				<span className="body-the-best">the best</span> places around the
        country.
			</p>
			<p>
        Dave Grohl only reviews <span className="body-the-best">the best</span>{" "}
        places, and now <span className="body-the-best">the best</span> reviews
        are available to you.
			</p>
			<SearchForm
				{...props}
				handleSearchBoxChange={props.handleSearchBoxChange}
			/>
			<VideoPlayer handleVideoToggle={props.handleVideoToggle}
				showVideo={props.showVideo}/>
		</div>
	);
};
