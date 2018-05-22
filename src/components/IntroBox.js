import React from 'react';
import Typist from 'react-typist';

function IntroBox(props) {
  return(
    <div className="intro-box">
            <Typist 
          startDelay={500}
          cursor={{show:false}}
          >
   <p className="intro-text-small"> I’ve got another confession to make</p>
          <Typist.Delay ms={1300} />
<p className="intro-text-small">I write reviews.</p>
<Typist.Delay ms={1300} />
<p className="intro-text-small">Others talk about stuff they hate.</p>
<Typist.Delay ms={1600} />
<p className="intro-text-small">Well I’m no fool.</p>
<Typist.Delay ms={1300} />
<p className="intro-text-small">They ask me what I dismiss</p>
<Typist.Delay ms={1300} />
<p className="intro-text-small">Well I refused.</p>
<Typist.Delay ms={1600} />
<p className="intro-text-small">I’m only giving</p>
<p className="intro-text-large">THE BEST, THE BEST, THE BEST, THE BEST REVIEWS.</p>
          </Typist>

          {/* Then fire a function that shows the input box and the 
          category buttons
          It also sets 'seenIntro' to True so that the animation
          doesn't play again.
          We'll have a "Watch Intro" link so they can repeat it.
          It'll save "seenIntro" to localStorage
     */}
          {/* <a href="#">skip</a> */}
          {/* Align this Skip text at the bottom right of the window */}
</div>
  )
}
export default IntroBox;