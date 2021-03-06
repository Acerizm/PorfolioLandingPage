//this index is for the whole web page

import React,{Component} from "react";
import {NavBar} from "../../../../src/Desktop/components/shared/NavBar/index.jsx";
import {
  BodyContainer
} from "../../../../src/Desktop/css/WebAppPage/bodyStyles.jsx";
import {HomeSection} from "../../../../src/Desktop/components/HomeSection/index.jsx";
import {MyProjectCollection} from "../../../../src/Desktop/components/MyProjectCollection/index.jsx"
import {AboutMyself} from "../../../../src/Desktop/components/AboutMyself/index.jsx"

const WebAppPage = {
  height: "2500px",
  //backgroundColor: "blue",
  //paddingTop: "60px"
  //marginTop: "60px"
}
export class DesktopWebApp extends Component{
  componentDidMount(){
    document.title = "Welcome To Haiqel's Porfolio!"
  }

  render(){
    return (
      <div id="DesktopWebApp" style={{...WebAppPage}}>
        <NavBar/>
        <Body/>
      </div>
    )
  }
}

//create the body
export class Body extends Component {
  // other attributes

  //render
  render(){
    return (
      <div id="MainBodyContainer" style={{...BodyContainer}}>
        <HomeSection/>
        <MyProjectCollection/>
        <AboutMyself/>
      </div>
    )
  }
}
