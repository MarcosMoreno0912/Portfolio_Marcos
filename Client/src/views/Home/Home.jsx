import React from 'react';
import NavBar  from '../../components/NavBar/NavBar.jsx';
import style from './Home.module.css';

const Home = () => {

	return (
		<>
			<div>
				<NavBar />
			</div>
			<div className={style.home}>
				<div className={style.title}>
					<h1>Hi, I'm Marcos, <br /> Full Stack Web Developer.</h1>
				</div>

				<div className={style.description}>
					<p>I am dedicated to creating personalized web pages adapted to each client. <br/> {"< I love coding />."}</p>
				</div>

				<div className={`${style.image} ${style["rotate-animation"]}`}>
					<img src="../../../about/FotoPersonal.png" alt="about" />
				</div>
			</div>
		</>
	)
}

export default Home;