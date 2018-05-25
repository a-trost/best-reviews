import React from 'react';

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
          <p>I want the best reviews for 
<select className="intro-form intro-form-select" name="category">
  <option value="shopping">&nbsp;Shopping</option>
  <option value="food">&nbsp;Food</option>
  <option value="funPlaces">&nbsp;Fun Places</option>
  <option value="services">&nbsp;Services</option>
</select> in <input className="intro-form intro-form-input" type="text" name="location" 
          autoFocus
          placeholder="New Haven, CT"
          value={props.searchRequest}
          onChange={props.handleSearchBoxChange}
/>.</p>
<Button />
</form>
</div>
</div>
  )
}
export default IntroBox;