// this is for the Home Section
import React,{Component} from "react";
import {
  HomeSectionContainer,
  FirstColumnStyle,
  SecondColumnStyle,
  PhotoColumn,
  MyProjectsColumn
} from "../../../../src/Desktop/css/HomeSection/HomeSectionStyles.jsx";
//declare the home section here

export class HomeSection extends Component {
  // attributes here

  //render here
  render() {
    return (
      <div id="Home Section" style={{...HomeSectionContainer}}>
        {/* Split into two different sections*/}
        <div id="First Column" style={{...FirstColumnStyle}}>
          {/*Split this into two columns: 1 is for my main photo*/}
          <div id="My Projects Column" style={{...MyProjectsColumn}}>
          </div>
          <div id="Photo Column" style={{...PhotoColumn}}>
          </div>
        </div>
        <div id="Second Column"style={{...SecondColumnStyle}}>
        </div>
      </div>
    )
  }
}
