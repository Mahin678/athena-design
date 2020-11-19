import React from 'react';
import img from '../../../Illustration/Group 86.png';
import img1 from '../../../Illustration/twitter (4)@2x.png';
import img2 from '../../../Illustration/dribbble (1)@2x.png';
import img3 from '../../../Illustration/linkedin (2)@2x.png';
import img4 from '../../../Illustration/happy@2x.png';
import img5 from '../../../Illustration/facebook-logo-in-circular-shape@2x.png'
import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <h1 style={{fontSize:'40px'}}>Get your design right, right now</h1>
                <p style={{fontSize:'20px'}}>Be the first know our latest offers and updates</p>
                <input className='input mt-3 mb-5' type="email" name="" id="" placeholder="Enter your email address"/>
            </div>
            <div className='row mt-5 ml-3'>
                <div className="col-md-1">

                </div>
                <div className="col-md-4">
                    <img src={img} alt=""/>
                    <div>
                        <img className="p-3" src={img5} alt=""/>
                        <img className="p-3" src={img1} alt=""/>
                        <img className="p-3" src={img3} alt=""/>
                        <img className="p-3" src={img2} alt=""/>
                        <img className="p-3" src={img1} alt=""/>
                    </div>
                </div>
                <div style={{fontSize:'20px'}} className="row col-md-7">
                    <div className="col-md-3">
                        <p>Features</p>
                        <p>Enterprise</p>
                        <p>pricing</p>
                    </div>
                    <div className="col-md-3">
                       <p>Blog</p>
                       <p>Help Center</p>
                       <p>Contact Us</p> 
                       <p>Status</p>
                    </div>
                    <div className="col-md-3">
                        <p>About Us</p>
                        <p>Terms of Service</p>
                        <p>Security</p>
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;