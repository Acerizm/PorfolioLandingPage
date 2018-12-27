// this is for MyProjectCollection
import React,{Component} from "react";
import {
  ProjectsContainerStyle,
  RowStyle,
  BiggerColumnStyle,
  SmallerColumnStyle,
  EmptyDivStyle,
  IconStyle,
} from "../../css/MyProjectCollection/MyProjectCollectionStyles.jsx"
import StoreIcon from "../../.././Pictures/StoreIcon.png"
import CameraIcon from "../../.././Pictures/CameraIcon.png"
import GameIcon from "../../.././Pictures/GameIcon.png"
import PortfolioIcon from "../../.././Pictures/PortfolioIcon.png"
import CloudIcon from "../../.././Pictures/CloudIcon.png"
import EcommerceIcon from "../../.././Pictures/EcommerceIcon.png"

export class MyProjectCollection extends Component {

  //attributes here

  //render here
  render(){
    return(
      <div id="MyProjectCollection" style={{height:"600px", border: "2px solid green",paddingBottom: "15%",backgroundColor: "white"}}>
        <h1 style={{fontFamily:"Arial",textAlign:"center",marginTop:"5%"}}>My Projects Collection</h1>
        <div id="ProjectsContainer" style={{...ProjectsContainerStyle,marginTop:"2%"}}>
            <div id="1st Row" style={{...RowStyle}}>
              {/*There are 2 columns here*/}
              <div class="biggerColumn" style={{...BiggerColumnStyle,backgroundColor:"#21A1F0"}}>
                <img src={StoreIcon} style={{...IconStyle}} ></img>
              </div>
              <div class="smallerColumn" style={{...SmallerColumnStyle,backgroundColor:"#FCCCDC"}}>
                <img src={CameraIcon} style={{...IconStyle}} ></img>
              </div>
            </div>
            <div class="EmptyDiv" style={{...EmptyDivStyle}}>
            </div>
            <div id="2nd Row" style={{...RowStyle}}>
              {/*There are 2 columns here*/}
              <div class="smallerColumn" style={{...SmallerColumnStyle,marginLeft: "5%",backgroundColor:"#63C1A0"}}>
                <img src={GameIcon} style={{...IconStyle}} ></img>
              </div>
              <div class="biggerColumn" style={{...BiggerColumnStyle,marginLeft: "10%",backgroundColor:"#EBB230"}}>
                <img src={PortfolioIcon} style={{...IconStyle}} ></img>
              </div>
            </div>
            <div class="EmptyDiv" style={{...EmptyDivStyle}}>
            </div>
            <div id="3rd Row" style={{...RowStyle}}>
              {/*There are 2 columns here*/}
              <div class="biggerColumn" style={{...BiggerColumnStyle,backgroundColor:"#E03434"}}>
                  <img src={CloudIcon} style={{...IconStyle}} ></img>
              </div>
              <div class="smallerColumn" style={{...SmallerColumnStyle,backgroundColor:"#653EAD"}}>
                <img src={EcommerceIcon} style={{...IconStyle}} ></img>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
