import React from "react";
import Navbar from "../Navbar/Navbar";
import headerImage from "../../../images/16 [Converted]@2x.png";

// clip-path: polygon(18% 65%, 100% 65%, 100% 81%, 94% 93%, 81% 100%, 0 100%, 0 85%, 6% 73%);

const Header = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="container">
            <div className="row">
               <div className="col-md-5 d-flex">
                  <div className="header-content align-self-center">
                     <h1>
                        Florence <br />
                        agency
                     </h1>
                     <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                     </p>
                     <button to="/pricing" className="btn">
                        See Pricing
                     </button>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="header-image">
                     <img className="img-fluid" src={headerImage} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
