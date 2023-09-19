import React from 'react';
import style from './Project.module.css';

const Projects = () => {


	return (
		<>
			<div className={style.containerP}>
				<div className={style.title}>
					<h1>My Projects</h1>
				</div>
				<div className={style.cardP}>
					<img src="/projects/Portada-Patitas.png" alt="Patitas sin Hogar" />
					<img src="/projects/portada-countries.png" alt="PI Countries" />
					<img src="/projects/icono+.png" alt="Próximamente..." />
					<img src="/projects/icono+.png" alt="Próximamente..." />
				</div>
			</div>
		</>
	)
}

export default Projects;