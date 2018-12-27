// this is for the Home Section
import React,{Component} from "react";
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

  //render here
  render() {
    return (
      <div id="Home Section" style={{...HomeSectionContainer}}>
        {/* Split into two different sections*/}
        <div id="First Row" style={{...FirstRowStyle}}>
          {/*Split this into two columns: 1 is for my main photo*/}
          <div id="My Desc Column" style={{...MyDescColumn, overflow:"hidden"}}>
            <h1 style={{...DescStyle}}>{WhoAmI}
            </h1>
            <p style={{...DescStyle}}>
              {MyDesc}
            </p>
          </div>
          <div id="Photo Column" style={{...PhotoColumn}}>
            <img src={MyImage} width="100%" height="100%" style={{borderRadius:"3%",position:"relative",top:"10%",border:"2px solid black",right:"10%"}}></img>
          </div>
        </div>
        <div id="Second Row"style={{...SecondRowStyle}}>
          <div id="MyProjectsBtn" style={{...MyProjectsBtnStyle}}>
            <img src={keyboardImage} height="250px" width="100%" style={{marginTop:"10px",marginBottom:"10px", borderRadius:"3%",border:"2px solid purple"}}></img>
          </div>
            <p style={{position:"relative", left: "13%",marginTop: "6%",fontSize:"30px",fontFamily:"Arial"}}>
              My Projects
            </p>
        </div>
      </div>
    )
  }
}
