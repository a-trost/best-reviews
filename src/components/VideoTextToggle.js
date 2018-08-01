import React from "react";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";
import "./VideoTextToggle.css";

export default class VideoTextToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleVideoToggle = this.handleVideoToggle.bind(this);
		this.state = {
			showVideo: true,
		};
	}

	handleVideoToggle() {
		// scroll.scrollToBottom();
		this.setState(prevState => ({
			showVideo: !prevState.showVideo,
		}));
	}
	render() {
		const opts = {
			width: "100%",
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 0,
				modestbranding: 0,
				rel: 0,
				showinfo: 0,
			},
		};

		return (
			<div className="description-container box-shadow">
				{this.state.showVideo ? (
					<YouTube videoId="2Wuq13E3dZc" opts={opts} onReady={this._onReady} />
				) : (
					<div className="description-text">
						<p>This is Dave grohl.</p>
						<p>He's a freakin’ rockstar.</p>
						<p>
							Dave's been in <span className="body-the-best">the best</span>{" "}
							bands like Nirvana and the Foo Fighters.
						</p>
						<p>He's toured all over the world.</p>
						<p>
							He only goes to <span className="body-the-best">the best</span>{" "}
							parties.
						</p>
						<p>
							He only eats <span className="body-the-best">the best</span> food.
						</p>
						<p>
							He sits in <span className="body-the-best">the best</span> chairs,
							and plays <span className="body-the-best">the best</span> guitars.
						</p>
						<p>And now, he’s sharing it with you.</p>
						<p>
							Type in an American Zip Code and get ready to read{" "}
							<span className="body-the-best">
								THE BEST, THE BEST, THE BEST, THE BEST REVIEWS.
							</span>
						</p>
					</div>
				)}
				<br />
				<p onClick={this.handleVideoToggle} className="toggle-text">
					{this.state.showVideo ? "Text Version" : "Video Version"}
				</p>
			</div>
		);
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
}
