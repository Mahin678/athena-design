import React from 'react';
import './OurAchievement.scss';
const OurAchievement = () => {
	return (
		<section className="Our-achievement py-5 my-5 d-flex align-items-center">
			<div className="container ">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-5 align-self-center">
						<div className="our-achievement-title text-left">
							<h2>Our Achievements</h2>
							<p>
								It is a long established fact that a reader will be
								distracted by the readable content of a page when
								looking at its layout. The point of using Lorem Ipsum is
								that it has a more-or-less normal distribution of
								letter.
							</p>
						</div>
					</div>
					<div className="col-sm-12 col-md-12  col-lg-7 align-self-center">
						<div className="row ">
							<div className="col-sm-6 col-md-6 col-lg-6">
								<div className="our-achievement Happy-Clients d-flex justify-content-center align-items-center">
									<div className="our-achievement-objective-img">
										<img
											className="img-fluid"
											src="https://i.imgur.com/Zseacqy.png"
											alt="Happy-Clients-img"
										/>
									</div>
									<div className="our-achievement-objective-body  align-items-center ">
										<h2>700+</h2>
										<p>Happy Clients</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-6  col-lg-6 ">
								<div className="our-achievement Projects-Completed  d-flex justify-content-center align-items-center">
									<div className="our-achievement-objective-img">
										<img
											className="img-fluid"
											src="https://i.imgur.com/728r3hQ.png"
											alt="Projects Completed-img"
										/>
									</div>
									<div className="our-achievement-objective-body">
										<h2>140+</h2>
										<p>Projects Completed</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-6  col-lg-6">
								<div className="our-achievement Crazy-Minds  d-flex justify-content-center align-items-center">
									<div className="our-achievement-objective-img">
										<img
											className="img-fluid"
											src="https://i.imgur.com/xrp8aRk.png"
											alt="Crazy-Minds-img"
										/>
									</div>
									<div className="our-achievement-objective-body">
										<h2>25+</h2>
										<p>Crazy Minds</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-6  col-lg-6">
								<div className="our-achievement Running-Projects  d-flex justify-content-center align-items-center">
									<div className="our-achievement-objective-img">
										<img
											className="img-fluid"
											src="https://i.imgur.com/znmATqT.png"
											alt="Running-Projects-img"
										/>
									</div>
									<div className="our-achievement-objective-body">
										<h2>75+</h2>
										<p>Running Projects</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurAchievement;
