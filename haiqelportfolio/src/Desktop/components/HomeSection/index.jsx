  // this is for the Home Section
import React,{Component} from "react";
import { TimelineMax,Back, CSSPlugin } from "gsap/all";
import {
  HomeSectionContainer,
  FirstRowStyle,
  SecondRowStyle,
  PhotoColumn,
  MyDescColumn,
  DescStyle,
  MyProjectsBtnStyle
} from "../../../../src/Desktop/css/HomeSection/HomeSectionStyles.jsx";
import {
  WhoAmI,
  MyDesc
} from "./AllTexts.jsx";
import MyImage from "../../../Pictures/Myself2.jpg";
import keyboardImage from "../../../Pictures/keyboard.jpg";
//declare the home section here

export class HomeSection extends Component {
  // attributes here
  constructor(props){
		super(props);
		this.WhoAmI = null;
    this.MyDesc =  null;
		// logo tween
		this.logoTween = null;
    this.test = [
      this.WhoAmI,
      this.MyDesc
    ]
	}


	componentDidMount(){
		// create logo tween
    console.log(this.test[0]);
		this.logoTween = new TimelineMax({pause:false})
    //.to(this.WhoAmI,1,{rotation: 360})
    //.staggerTo(this.WhoAmI,2,{rotation: 360},2);
    .staggerFromTo(this.test, 3,
      {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
      {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 3);
	}
  //render here
  render() {
    return (
      <div id="Home Section" style={{...HomeSectionContainer}}>
        {/* Split into two different sections*/}
        <div id="First Row" style={{...FirstRowStyle}}>
          {/*Split this into two columns: 1 is for my main photo*/}
          <div id="My Desc Column" style={{...MyDescColumn, overflow:"hidden"}}>
            <h1 id="something" style={{...DescStyle,color:"white",position:"relative"}}
              ref={ h1 => this.test[0] = h1 }
              >
              {WhoAmI}
            </h1>
            <p style={{...DescStyle,color:"white",position:"relative"}}
              ref={ p => this.test[1] = p}>
              {MyDesc}
            </p>
          </div>
          <div id="Photo Column" style={{...PhotoColumn}}>
            <img src={MyImage} width="100%" height="100%" style={{}}></img>
          </div>
        </div>
      </div>
    )
  }
}
