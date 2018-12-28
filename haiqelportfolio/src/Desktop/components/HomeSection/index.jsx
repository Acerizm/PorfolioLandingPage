  // this is for the Home Section
import React,{Component} from "react";
import { TimelineMax,Back, CSSPlugin } from "gsap";
import {
  HomeSectionContainer,
  FirstRowStyle,
  SecondRowStyle,
  PhotoColumn,
  MyDescColumn,
  DescStyle,
  MyProjectsBtnStyle,
  SpanStyle
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
		// logo tween
		this.Tween = null;
    this.MyDesc = null;
    this.test2 = []
	}


	componentDidMount(){
		// create logo tween
		this.Tween = new TimelineMax({pause:false})
    //.to(this.WhoAmI,1,{rotation: 360})
    //.staggerTo(this.WhoAmI,2,{rotation: 360},2);
    .staggerFromTo(this.test2, 0.5,
      {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
      {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.1)
    .to(this.MyDesc, 0.5,{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0,x: 100})
    .to(this.MyDesc, 0.5,{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0,x: 0});
	}
  //render here
  render() {
    return (
      <div id="Home Section" style={{...HomeSectionContainer}}>
        {/* Split into two different sections*/}
        <div id="First Row" style={{...FirstRowStyle}}>
          {/*Split this into two columns: 1 is for my main photo*/}
          <div id="My Desc Column" style={{...MyDescColumn, overflow:"hidden"}}>
            <h1 id="something" style={{...DescStyle,color:"white",position:"relative"}}>
              <span ref={span => this.test2[0] =span} style={{...SpanStyle}}>Hello, </span>
              <span ref={span => this.test2[1] =span} style={{...SpanStyle}}>I'm </span>
              <span ref={span => this.test2[2] =span} style={{...SpanStyle}}>Haiqel </span>
              <span ref={span => this.test2[3] =span} style={{...SpanStyle}}>- </span>
              <span ref={span => this.test2[4] =span} style={{...SpanStyle}}>Full </span>
              <span ref={span => this.test2[5] =span} style={{...SpanStyle}}>Stack </span>
              <span ref={span => this.test2[6] =span} style={{...SpanStyle}}>Software </span>
              <span ref={span => this.test2[7] =span} style={{...SpanStyle}}>Engineer </span>
              <span ref={span => this.test2[8] =span} style={{...SpanStyle}}>& </span>
              <span ref={span => this.test2[9] =span} style={{...SpanStyle}}>Co-Founder </span>
              <span ref={span => this.test2[10] =span} style={{...SpanStyle}}>Of </span>
              <span ref={span => this.test2[11] =span} style={{...SpanStyle}}>Inspirous.Us !</span>
            </h1>
            <p style={{...DescStyle,color:"white",position:"relative"}}
              ref={p => this.MyDesc = p}>
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
