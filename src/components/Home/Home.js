import React from 'react';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurAchievement from '../HomeSection/OurAchievement/OurAchievement';
import RunningProject from '../HomeSection/RunningProject/RunningProject';
import WhatWeDid from '../HomeSection/WhatWeDid/WhatWeDid';
import './Home.scss';
const Home = () => {
	return (
		<div>
			<Header />
			<div className="mid-section ">
				<WhatWeDid />
				<img
					className="img-bg-mid"
					src="https://i.imgur.com/MGML6lP.png"
					alt="bg-img-what-we-do"
				/>
				<RunningProject />
			</div>
			<OurAchievement />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
