//this is for AboutMyself
import React,{Component} from "react";
import {
  AboutMySelfContainerStyle,
  MyImageStyle,
  BottomRowStyle,
  AboutMyselfContainerStyleMobile
} from "../../css/AboutMyself/AboutMyselfStyles";
//import the responsive wrapper code here
import DesktopBreakpoint from "../responsiveWrapperCode/desktop_breakpoint.jsx";
import PhoneBreakpoint from "../responsiveWrapperCode/phone_breakpoint.jsx";

export class AboutMyself extends Component {
  //attributes

  render(){
    return(
      <div>
        <DesktopBreakpoint>
          <div id="AboutMyselfContainer" style={{...AboutMySelfContainerStyle}}>
            <div id="EmptyDiv" style={{height: "20%"}}></div>
            <h1 style={{color: "white",fontFamily: "Arial",fontSize: "40px",marginLeft: "10%"}}>My Passion</h1>
            <pre style={{marginLeft: "6.5%",color: "white",fontFamily: "Arial",fontSize: "30px"}}>
            {`
            My passion is mostly centered around learning and using
            new technologies and frameworks relating to the tech
            industry.`}
            </pre>
            <div id="BottomRow" style={{...BottomRowStyle}}>
              <div id="1st Column">
                <h1 style={{color: "white",fontFamily: "Arial",fontSize: "35px",marginLeft: "38%"}}>My Aspiration</h1>
                <pre style={{marginLeft: "6.5%",color: "white",fontFamily: "Arial",fontSize: "30px",marginLeft: "18%"}}>
                {`
                I aspire to become a
                successful entrepreneur who
                can provide huge value
                to people while making a
                positive difference and impact
                to their lives through
                technology
                `}
                </pre>
              </div>
              <div id="2nd Row">
                <h1 style={{color: "white",fontFamily: "Arial",fontSize: "40px",marginLeft: "30%"}}>My Skills</h1>
                <pre style={{marginLeft: "6.5%",color: "white",fontFamily: "Arial",fontSize: "30px",marginLeft: "20%"}}>
                {`
                Full Stack Development                         API Development


                MachineLearning                                Designing & Wireframing
                `}
                </pre>
              </div>
            </div>
          </div>
        </DesktopBreakpoint>
        <PhoneBreakpoint>
          <div id="AboutMyselfContainer" style={{...AboutMyselfContainerStyleMobile}}>
            <div id="EmptyDiv" style={{height: "5%"}}></div>
            <h1 style={{color: "white",fontFamily: "Arial",fontSize: "40px",textAlign:"center"}}>My Passion</h1>
            <p style={{marginLeft: "6.5%",color: "white",fontFamily: "Arial",fontSize: "30px"}}>
            My passion is mostly centered around learning and using
            new technologies and frameworks relating to the tech
            industry!
            </p>
            <h1 style={{color: "white",fontFamily: "Arial",fontSize: "35px",textAlign: "center"}}>My Aspiration</h1>
            <p style={{color: "white",fontFamily: "Arial",fontSize: "30px",marginLeft: "6.5%"}}>
            I aspire to become a
            successful entrepreneur who
            can provide huge value
            to people while making a
            positive difference and impact
            to their lives through
            technology
            </p>
            <h1 style={{color: "white",fontFamily: "Arial",fontSize: "40px",textAlign: "center"}}>My Skills</h1>
            <p style={{marginLeft: "6.5%",color: "white",fontFamily: "Arial",fontSize: "30px",marginLeft: "6.5%"}}>
            Full Stack Development, API Development, MachineLearning, Designing & Wireframing
            </p>
          </div>
        </PhoneBreakpoint>
      </div>
    )
  }
}
