import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
//** Import Image */
import logo from "../../../images/Group 86.png";
import dotBg from "../../../images/headerDot.png";

const Navbar = () => {
   return (
      <div className="theme-navbar">
         <div className="dot-bg">
            <img src={dotBg} alt="" />
         </div>

         <div className="row">
            <div className="col-md-4">
               <div className="logo">
                  <img src={logo} alt="" />
               </div>
            </div>
            <div className="col-md-8">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <button
                     className="navbar-toggler ml-auto"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navbarTogglerDemo01"
                     aria-controls="navbarTogglerDemo01"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                     className="collapse navbar-collapse"
                     id="navbarTogglerDemo01"
                  >
                     <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                           <Link className="nav-link" to="/">
                              Home
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/about">
                              About
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/services">
                              Services
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/pricing">
                              Pricing
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/ourTeam">
                              OurTeam
                           </Link>
                        </li>
                        <button to="/" className="btn theme-btn text-white">
                           Contact us
                        </button>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
