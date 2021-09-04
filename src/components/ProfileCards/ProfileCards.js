import React from "react";
import "./css/ProfileCards.css";
import { BsFillCircleFill } from "react-icons/bs";
function ProfileCards() {
  return (
    <div className="container-fluid profileCardsContainer">
      <div className="row">
        <div className="col-12 col-lg-4 col-md-4 offset-md-2 mt-5">
          <div className="profileCardsBox p-4">
            <span className="cardHeader d-flex align-items-center">
              <span className="circleBox p-3">
                <BsFillCircleFill className="circle" />
              </span>
              <h4 className="cardHeaderText text-start">
                Followers/Following of 
                @any_User
              </h4>
            </span>
            <p className="profileCardText mt-5 text-start">
              Lorem Ipsum something is there. Something more will come here. Oh
              yes it will come.
            </p>
            <div className="text-center profileCardsBtnBox mt-5">
              <button className="btn profileCardsBtn">SAMPLE DATA</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-5">
          <div className="profileCardsBox p-4">
            <span className="cardHeader d-flex align-items-center">
              <span className="circleBox p-3">
                <BsFillCircleFill className="circle1" />
              </span>
              <h4 className="cardHeaderText text-start">
                Liker/Commenter of
                any post
              </h4>
            </span>
            <p className="profileCardText mt-5 text-start">
              Lorem Ipsum something is there. Something more will come here. Oh
              yes it will come.
            </p>
            <div className="text-center profileCardsBtnBox mt-5">
              <button className="btn profileCardsBtn1">SAMPLE DATA</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4 offset-md-2 mt-5">
          <div className="profileCardsBox p-4">
            <span className="cardHeader d-flex align-items-center">
              <span className="circleBox p-3">
                <BsFillCircleFill className="circle2" />
              </span>
              <h4 className="cardHeaderText text-start">
               People Posting Specific
                #Hashtags
              </h4>
            </span>
            <p className="profileCardText mt-5 text-start">
              Lorem Ipsum something is there. Something more will come here. Oh
              yes it will come.
            </p>
            <div className="text-center profileCardsBtnBox mt-5">
              <button className="btn profileCardsBtn2">SAMPLE DATA</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-5">
          <div className="profileCardsBox p-4">
            <span className="cardHeader d-flex align-items-center">
              <span className="circleBox p-3">
                <BsFillCircleFill className="circle3" />
              </span>
              <h4 className="cardHeaderText text-start">
                People Posting at
                Specific Locations
              </h4>
            </span>
            <p className="profileCardText mt-5 text-start">
              Lorem Ipsum something is there. Something more will come here. Oh
              yes it will come.
            </p>
            <div className="text-center profileCardsBtnBox mt-5">
              <button className="btn profileCardsBtn3">SAMPLE DATA</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCards;
