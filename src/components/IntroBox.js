import React from 'react';

function IntroBox(props) {
  return(
    <div className="intro-container">
    <div className="intro-box">
    <form noValidate onSubmit={props.handleSubmit} >
<p>I want the best places for 
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