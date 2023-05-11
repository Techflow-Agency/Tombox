import React from "react";
import Modal from "react-modal";
import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";

Modal.setAppElement("#root");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>¿Quiénes somos?</span>
                <h3>¿Quiénes somos?</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />
          <div className="tokyo_tm_short_info">
            
          </div>
          {/* End personal info */}


        </div>
      </div>
      {/* End .container */}



      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
