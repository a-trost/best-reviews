import React, { Component } from "react";

export default class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.handleVideoToggle = this.handleVideoToggle.bind(this);
		this.state = {
			showVideo: false
		};
	}

	handleVideoToggle() {
		this.setState(prevState => ({
			showVideo: !prevState.showVideo
		}));
	}

	render() {
		return (
			<div>
				<button onClick={this.handleVideoToggle}>
					{this.state.showVideo ? "Okay, I get it." : "I don't get it."}
				</button>
				<br />
				{this.state.showVideo && (
					<iframe
						title="Best Of You - Foo Fighters"
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/h_L4Rixya64?rel=0&amp;start=25"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
					/>
				)}
			</div>
		);
	}
}
