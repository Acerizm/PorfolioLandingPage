import MyImage from "../../.././Pictures/AboutMyselfImage.jpg";
import MyImage2 from "../../.././Pictures/AboutMyself2.jpg";
export const AboutMySelfContainerStyle = {
  backgroundColor: "#22252C",
  height: "1000px",
  backgroundImage: "url(" + MyImage + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}

export const MyImageStyle = {
  height: "100%",
  width: "100%"
}

export const BottomRowStyle = {
  display: "flex",
  flexDirection: "row"
}

/////////////////////////////////////////
//This is for mobile

export const AboutMyselfContainerStyleMobile = {
  backgroundColor: "#22252C",
  height: "1000px",
  backgroundImage: "url(" + MyImage2 + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}
