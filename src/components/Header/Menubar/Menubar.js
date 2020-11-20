import React from 'react';
import '../Header.scss';
const Menubar = () => {
	return (
		<div className="navbar-header">
			<div className="text-left  navbar-bg-img">
				<img src="https://i.imgur.com/7MGR8sQ.png" alt="img" />
			</div>
			<nav className="navbar navbar-expand-lg navbar-light ">
				<div className="container">
					<img
						className="img-fluid navbar-icon navbar-brand"
						src="https://i.imgur.com/6mOEvqQ.png"
					/>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto ">
							<li className="nav-item active">
								<a className="nav-link text-sm-center " href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-sm-center " href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link  text-sm-center " href="#">
									Service
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-sm-center " href="#">
									pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Our Team
								</a>
							</li>
						</ul>
						<button className="btn btn-header-custom    ">
							Contact Us
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Menubar;
