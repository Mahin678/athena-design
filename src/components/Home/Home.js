import React from 'react';
import RunningProject from '../HomeSection/RunningProject/RunningProject';
import WhatWeDid from '../HomeSection/WhatWeDid/WhatWeDid';
import './Home.scss';
const Home = () => {
	return (
		<div>
			<div className="mid-section">
				<WhatWeDid />
				<img
					className="img-bg-mid"
					src="https://i.imgur.com/MGML6lP.png"
					alt=""
				/>
				<RunningProject />
			</div>
		</div>
	);
};

export default Home;
