import React, { Component } from 'react';
import yelp from 'yelp-fusion';
import yelp0 from "../img/y-0.png";
import yelp1 from "../img/y-1.png";
import yelp2 from "../img/y-2.png";
import yelp3 from "../img/y-3.png";
import yelp4 from "../img/y-4.png";
import yelp5 from "../img/y-5.png";
import dave0 from "../img/d-0.png";
import dave1 from "../img/d-1.png";
import dave2 from "../img/d-2.png";
import dave3 from "../img/d-3.png";
import dave4 from "../img/d-4.png";
import dave5 from "../img/d-5.png";
import closeImage from "../img/close.png";


class InfoWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDavesReview: true,
      };
  }

  componentDidMount(){
    // this.yelpAPIFetch();
    const spans = document.getElementsByClassName("best");
    for (let i=0; i < spans.length; i++) {
      spans[i].className += " animate";
    }
  }

  yelpAPIFetch() {
    const client = yelp.client('Bearer N67xVI60a0S3LWk6TN5mZkBnaASjfwqPB-LGlfFChrOLt3p24Hs-Xj99IHDkT7dlxQzj8KscfFoMbx99GCiTr02dTahQp0UyOYhwsVOm7sUSjbhS7y8vjvM2C2KoWnYx');
    client.search({
      term:'Four Barrel Coffee',
      location: 'san francisco, ca'
    }).then(response => {
      console.log(response.jsonBody.businesses[0].name);
    }).catch(e => {
      console.log(e);
    });
  }

  createTheBestSpans = (repetitions=4) =>{
    let spans = []
    for (let i = 1; i < repetitions; i++) {
        spans.push(<span className="the"> THE </span>)
        spans.push(<span className="best">BEST,</span>)
    };
    spans.push(<span className="the"> THE </span>)
    spans.push(<span className="best">BEST </span>)    
    return spans
  }

  davesReview() {
    return(
      <div className="review-container">
      <h3>Dave's Review</h3>
  {this.props.bestReview.precedingPhrase}  {this.props.placeName} 
  <span className="connecting-phrase"> {this.props.bestReview.connectingPhrase}</span> 
  <span className="the-best">
  {this.createTheBestSpans()}
  </span>
  {console.log("this ran")}
  {this.props.bestReview.endingPhrase}
  {this.starRating(5, "dave")}
  <h3 onClick={()=>this.setState({viewDavesReview:false})}>What other people are saying</h3>
  </div>
    )
  }

  yelpsReview(){
    return(
    <div>
    <h3>A Yelp Review</h3>
What people on yelp think.
{this.starRating(3, "yelp")}
<h3 onClick={()=>this.setState({viewDavesReview:true})}>The Best Review...</h3>
</div>
    )
  }

  starRating(rating, brand) {
    const starCount = Math.round(rating);
    let starImage = {}
    if (brand === "dave") {
      const daveImages = [dave0, dave1, dave2, dave3, dave4, dave5];
      starImage = daveImages[starCount];
    } else {
      const yelpImages = [yelp0, yelp1, yelp2, yelp3, yelp4, yelp5];
      starImage = yelpImages[starCount];
    }
    return(
        <img src={starImage} alt={`Rating: ${starCount} Stars`}  width="150px"/>
    )
  }
  render() {
  return(
    <div className="info-popup">
    <img alt="Close Window" src={closeImage} onClick={this.props.handleCloseFunction} className="close" />
    {this.state.viewDavesReview ? this.davesReview() : this.yelpsReview()}
    
</div>
  )
}
}

export default InfoWindow;