import React from "react";
import FunFact from "./FunFact";
import Partners from "./Partners";
import Pricing from "./Pricing";
import Services from "./Services";

const ServiceMain = () => {
  return (
    <>
      {/* SERVICE */}

      <div className="container">
        <div className="tokyo_tm_services">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Servicios</span>
                <h3>Catálogo de servicios</h3>
              </div>
            </div>
          </div>
          {/* End tokyo_tm_title */}

          <div className="list">
            <ul>
              <Services />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}



      {/* /SERVICE */}
    </>
  );
};

export default ServiceMain;
