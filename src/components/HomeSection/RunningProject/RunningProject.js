import React from 'react';
import './RunningProject.scss';
const RunningProject = () => {
	return (
		<section className="running-project py-3 mt-5 ">
			<div className="row p-2 mx-0 mx-lg-5 ">
				<div className="col-lg-6">
					<div className="running-project-img text-left">
						<img src="https://i.imgur.com/2osoZGY.png" alt="" />
						<img
							style={{ width: '450px' }}
							className="img-fluid  d-block mx-auto "
							src="https://i.imgur.com/Ra12tOT.png"
							alt="running-project-img-1"
						/>
						<div className="text-right m-0 p-0">
							<img
								className="text-right"
								src="https://i.imgur.com/1bxx1Hq.png"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="col-lg-6 align-self-center ">
					<div className="running-project-details p-4">
						<h2 className="text-left text-md-center text-lg-left">
							STAY RUNNING & Project
						</h2>
						<p className="mx-md-auto text-sm-left text-md-center text-lg-left mx-lg-0 ">
							It is a long established fact that a reader will be
							distracted by the readable content of a page when looking
							at its layout. The point of using Lorem Ipsum is that it
							has a more-or-less normal distribution of letter.
						</p>
						<div className="text-left text-sm-left text-md-center text-lg-left ">
							<button className="running-project-btn  ">
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RunningProject;
