import React,{Component} from "react";
import {
  ProjectsContainerStyle
} from "../css/MyProjectCollection/MyProjectCollectionStyles.jsx"


export class MyProjectCollection extends Component {

  //attributes here

  //render here
  render(){
    return(
      <div id="MyProjectCollection">
        <h1 style={{fontFamily:"Arial",textAlign:"center",marginTop: "5%"}}>My Projects Collection</h1>
        <div id="ProjectsContainer" style={{border:"2px solid red"}}>

        </div>
      </div>
    )
  }
}
