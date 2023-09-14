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
					<h1>Hi, I'm Marcos Moreno, <br /> Full Stack Web Developer.</h1>
				</div>

				<div className={style.description}>
					<p>Me dedico al desarrollo de páginas web desde cero, <br/> creando así soluciones totalmente personalizadas según lo que los clientes necesitan.</p>
				</div>

				<div className={`${style.image} ${style["rotate-animation"]}`}>
					<img src="../../../about/FotoPersonal.png" alt="about" />
				</div>
			</div>
		</>
	)
}

export default Home;