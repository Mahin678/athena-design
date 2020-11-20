import React from 'react';
import img from '../../Illustration/Group 86.png';
import img1 from '../../Illustration/twitter (4)@2x.png';
import img2 from '../../Illustration/dribbble (1)@2x.png';
import img3 from '../../Illustration/linkedin (2)@2x.png';
import img4 from '../../Illustration/happy@2x.png';
import img5 from '../../Illustration/facebook-logo-in-circular-shape@2x.png';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="container py-5">
			<div className="text-center mt-5  ">
				<h1 style={{ fontSize: '40px' }}>
					Get your design right, right now
				</h1>
				<p style={{ fontSize: '20px' }}>
					Be the first know our latest offers and updates
				</p>
				<div
					className="input-group  mx-auto my-5 "
					style={{ width: '300px' }}
				>
					<span
						type="text"
						className="form-control"
						placeholder="Recipient's username"
					/>
					<div className="input-group-append">
						<button className="btn btn-success">Get Started</button>
					</div>
				</div>
			</div>
			<div className="row mt-5  text-left">
				<div className="col-sm-12 col-md-6 col-lg-5  text-center">
					<img
						style={{ width: '100px', height: '70px' }}
						className="img-fluid "
						src={img}
						alt="footer-icon-main"
					/>
					<div>
						<a href="/">
							<img
								className="p-3 img-fluid"
								src={img5}
								alt="img-footer-icon-1"
							/>
						</a>
						<img
							className="p-3 img-fluid"
							src={img1}
							alt="img-footer-icon-1"
						/>
						<img
							className="p-3 img-fluid"
							src={img3}
							alt="img-footer-icon-2"
						/>
						<img
							className="p-3 img-fluid"
							src={img2}
							alt="img-footer-icon-3"
						/>
						<img
							className="p-3 img-fluid"
							src={img1}
							alt="img-footer-icon-4"
						/>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-7">
					<div className="row text-center  text-lg-left">
						<div className="col-sm-12 col-md-4 col-lg-4 mt-3">
							<p>Features</p>
							<p>Enterprise</p>
							<p>pricing</p>
						</div>
						<div className="col-sm-12 col-md-4 col-lg-4 mt-3">
							<p>Blog</p>
							<p>Help Center</p>
							<p>Contact Us</p>
							<p>Status</p>
						</div>
						<div className="col-sm-12 col-md-4 col-lg-4 mt-3">
							<p>About Us</p>
							<p>Terms of Service</p>
							<p>Security</p>
							<p>Login</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
