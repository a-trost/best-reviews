import React from "react";

export default (props) => (
  <div>
    <button onClick={props.handleVideoToggle}>
      {props.showVideo ? "Okay, I get it." : "I don't get it."}
    </button>
    <br/>
    {props.showVideo && (
      <iframe
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
