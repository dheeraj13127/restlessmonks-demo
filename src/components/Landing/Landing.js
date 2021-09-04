import React from "react";
import ProfileAccounts from "../ProfileAccounts/ProfileAccounts";
import ProfileCards from "../ProfileCards/ProfileCards";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import "./css/Landing.css";

function Landing() {
  return (
    <div className="landingContainer mb-5">
      <ProfileInfo />
      <ProfileCards />
      <ProfileAccounts />
    </div>
  );
}

export default Landing;
