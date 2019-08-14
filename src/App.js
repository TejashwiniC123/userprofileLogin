import React from "react";
import Icon from "./img/1.png";
import UserProfile from "./component/UserProfile";
import usericon from "./img/outline_account_circle_black_18dp.png";
import email from "./img/outline_email_black_18dp.png"
import mobile from "./img/outline_mobile_screen_share_black_18dp.png"
import calender from "./img/outline_calendar_today_black_18dp.png"
import "./App.css";

function App() {
  return (
    <UserProfile
      Search={"Search"}
      Image={Icon}
      name1={"USER PROFILE"}
      Uname={"Lacey Fernandez"}
      nameUser={"User Name"}
      userIcon={usericon}
      emailUser={"Email Id"}
      email={email}
      mobileUser={"Mobile Number"}
      mobile={mobile}
      dobUser={"Date Of Birth"}
      dob={calender}
      sex={"Sex"}
      male={"Male"}
      female={"Female"}
      ButtonSave={"SAVE"}
    />
  );
}

export default App;
