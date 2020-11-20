import React from 'react';
import Menubar from './Menubar/Menubar';
import './Header.scss';
const Header = () => {
	return (
		<header className="header-bg">
			<Menubar />
			<div className="header-content">
				<div className="container">
					<div className="row ">
						<div className="col-sm-12 col-md-6 col-lg-6 align-self-center  mt-3">
							<div className="text-left">
								<div className="header-content-text">
									<img
										className="img-fluid"
										src="https://i.imgur.com/KzKoOKc.png"
										alt=""
									/>
								</div>
								<h1 className="header-text">Florence agency</h1>
								<p>
									Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer
									took a galley of type and scrambled it to make a type
									specimen book.
								</p>
								<button className="btn btn-header-custom">
									See Pricing
								</button>
								<img
									style={{ marginLeft: '-120px' }}
									className="img-fluid"
									src="https://i.imgur.com/PfITVBI.png"
									alt=""
								/>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<img
								className="img-fluid"
								src="https://i.imgur.com/iTt0D8s.png"
								alt="header-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
