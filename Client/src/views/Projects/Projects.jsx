import React from 'react';
import style from './Project.module.css';

const Projects = () => {

	const handleProjectClick = (url) => {
		window.location.href = url
	}

	return (
		<>
			<div className={style.containerP}>
				<div className={style.title}>
					<h1>My Projects</h1>
				</div>
				<div className={style.imgContainer}>
					<div className={style.cardP}>
						<img src="/projects/Portada-Patitas.png" alt="Patitas sin Hogar" onClick={() => handleProjectClick("https://henry-pf-git-main-rieraandres.vercel.app/")}/>
						<span>Patitas sin Hogar</span>
					</div>
					<div className={style.cardP}>
						<img src="/projects/portada-countries.png" alt="PI Countries" onClick={() => handleProjectClick("https://github.com/MarcosMoreno0912/PI_Countries_Marcos-")} />
						<span>Countries</span>
					</div>
					<div className={style.cardP}>
						<img src="/projects/icono+.png" alt="Próximamente..." />
						<span>Próximamente...</span>
					</div>
					<div className={style.cardP}>
						<img src="/projects/icono+.png" alt="Próximamente..." />
				  	<span>Próximamente...</span>
					</div>
					<div className={style.cardP}>
						<img src="/projects/icono+.png" alt="Próximamente..." />
				  	<span>Próximamente...</span>
					</div>

				</div>
			</div>
		</>
	)
}

export default Projects;