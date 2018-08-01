import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { animateScroll as scroll } from "react-scroll";

export default class MusicVideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.handleVideoToggle = this.handleVideoToggle.bind(this);
		this.state = {
			showVideo: false,
		};
	}

	handleVideoToggle() {
		scroll.scrollToBottom();
		this.setState(prevState => ({
			showVideo: !prevState.showVideo,
		}));
	}

	render() {
		return (
			<div>
				<Button
					fullWidth
					variant="raised"
					color={this.state.showVideo ? "secondary" : "primary"}
					size="large"
					onClick={this.handleVideoToggle}
				>
					{this.state.showVideo ? "Okay, I get it" : "I don't get it"}
				</Button>
				<br />
				{this.state.showVideo && (
					<React.Fragment>
						<br />
						<iframe
							title="Best Of You - Foo Fighters - Youtube"
							width="100%"
							height="350"
							src="https://www.youtube-nocookie.com/embed/h_L4Rixya64?rel=0&amp;start=25"
							frameBorder="0"
							allow="autoplay; encrypted-media"
							allowFullScreen
						/>
					</React.Fragment>
				)}
			</div>
		);
	}
}
