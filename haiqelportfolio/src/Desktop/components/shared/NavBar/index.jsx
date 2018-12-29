// this is for NavBar

import React from "react";

import {
  MainContainer,
  TabContainer,
  Tab,
  Anchor,
  MainContainerMobile
}
from "../../../css/shared/NavBar/NavBarStyle.jsx";
//import the responsive wrapper code here
import DesktopBreakpoint from "../../responsiveWrapperCode/desktop_breakpoint.jsx";
import PhoneBreakpoint from "../../responsiveWrapperCode/phone_breakpoint.jsx";

// list down the components here
export const NavBar = () => (
  <div>
    <DesktopBreakpoint>
      <div id="MainNavBarContainer" style={{...MainContainer}}>
        {/*Another container for the nav tabs*/}
        <div id="NavBarTabContainer" style={{...TabContainer}}>
          {/*There will be 3 main tabs*/}
          {/*<div id="HomeTab" className="tab" style={{...Tab}}>
            <div className="Anchor" style={{...Anchor}} onClick={}>
              Home
            </div>
          </div>
          <div id="MyProjectsTab" className="tab" style={{...Tab}}>
            <div className="Anchor" style={{...Anchor}}>
              My Projects
            </div>
          </div>
          <div id="AboutMyselfTab" className="tab" style={{...Tab}}>
            <div className="Anchor" style={{...Anchor}}>
              About Myself
            </div>
          </div>

        */}
        <h1 style={{fontSize: "20px",fontFamily: "Arial",textAlign:"center"}}>Haiqel's Portfolio</h1>
        </div>
      </div>
    </DesktopBreakpoint>
    <PhoneBreakpoint>
      <div id="MainNavBarContainer" style={{...MainContainerMobile}}>
        {/*Another container for the nav tabs*/}
        <div id="NavBarTabContainer" style={{...TabContainer}}>
        <h1 style={{fontSize: "20px",fontFamily: "Arial"}}>Haiqel's Portfolio</h1>
        </div>
      </div>
    </PhoneBreakpoint>
  </div>
)
