import React from 'react';
import './whatWeDo.scss';
const WhatWeDid = () => {
	return (
		<section className="what-we-do py-5">
			<div className="container">
				<div className="what-we-do-title">
					<h2>What we do </h2>
					<p className="what-we-do-text">
						Our main focus is to make the User Experience very simple and
						easy. Simplicity is our Strength.
					</p>
				</div>
				<div className="what-we-do-content my-5 ">
					<div className="row">
						<div className="col-md-3 ">
							<div className="what-we-do-object-wrapper">
								<div className="what-we-dp-img-wrapper">
									<img
										className="img-fluid"
										src="https://i.imgur.com/HyfIsr5.png"
										alt="what-we-dp-img"
									/>
								</div>
								<div className="what-we-do-title">
									<h5>Experience Design</h5>
									<p>
										The point of using Lorem Ipsum is that it has a
										more-or-less normal.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 ">
							<div className="what-we-do-object-wrapper">
								<div className="what-we-dp-img-wrapper">
									<img
										className="img-fluid"
										src="https://i.imgur.com/lCGNqof.png"
										alt="what-we-dp-img"
									/>
								</div>
								<div className="what-we-do-title">
									<h5>Interface Design</h5>
									<p>
										The point of using Lorem Ipsum is that it has a
										more-or-less normal.
									</p>
								</div>
							</div>
						</div>
						<div className=" col-md-3 ">
							<div className="what-we-do-object-wrapper">
								<div className="what-we-dp-img-wrapper">
									<img
										className="img-fluid"
										src="https://i.imgur.com/xpCGwCQ.png"
										alt="what-we-dp-img"
									/>
								</div>
								<div className="what-we-do-title">
									<h5>Prototyping</h5>
									<p>
										The point of using Lorem Ipsum is that it has a
										more-or-less normal.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-3  ">
							<div className="what-we-do-object-wrapper">
								<div className="what-we-dp-img-wrapper">
									<img
										className="img-fluid"
										src="https://i.imgur.com/nP7UUcx.png"
										alt="what-we-dp-img"
									/>
								</div>
								<div className="what-we-do-title">
									<h5>Illustration</h5>
									<p>
										The point of using Lorem Ipsum is that it has a
										more-or-less normal.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatWeDid;
