import React from "react";
//** Import Template Parts */
import Header from "../../templateParts/Header/Header";
import Footer from "../../templateParts/Footer/Footer";
//** Import Image */
import blueBg from "../../../images/Group 45@2x.png";
import dotBg from "../../../images/headerDot.png";
import stuBg from "../../../images/stu.png";

const Home = () => {
   return (
      <>
         <section className="header">
            <div className="blue-bg">
               <img src={blueBg} alt="" />
            </div>
            <div className="dot-bg2">
               <img src={dotBg} alt="" />
            </div>
            <div className="stu-bg">
               <img src={stuBg} alt="" />
            </div>
            <div className="container">
               <Header></Header>
            </div>
         </section>
         <Footer></Footer>
      </>
   );
};

export default Home;
