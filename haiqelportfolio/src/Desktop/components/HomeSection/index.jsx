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
          <div id="My Desc Column" style={{...MyDescColumn}}>
            <p style={{...DescStyle}}>{WhoAmI}
            </p>
            <p style={{...DescStyle}}>
              {MyDesc}
            </p>
          </div>
          <div id="Photo Column" style={{...PhotoColumn}}>
            ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
          </div>
        </div>
        <div id="Second Row"style={{...SecondRowStyle}}>
          <div id="MyProjectsBtn" style={{...MyProjectsBtnStyle}}>
            Click me Here!
          </div>
        </div>
      </div>
    )
  }
}
