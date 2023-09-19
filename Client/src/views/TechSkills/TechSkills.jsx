import React from 'react';
import style from './TechSkills.module.css';

const TechSkills = () => {

	const handleClickDocs = (url) => {
		window.location.href = url;
	}

	return (
		<>
			<div className={style.container}>
				<div className={style.image1}>
					<img src="skillsImage.jpg" alt="image1"/>
				</div>
				<div className={style.image2}>
					<img src="pcYcodigo.jpg" alt="image2"/>
				</div>
				<div className={style.image3}>
					<img src="codigo.jpg" alt="image3"/>
				</div>
				<div className={style.skills}>
					  <div className={style.title}>
					   <h3>Tech Stack</h3>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://developer.mozilla.org/es/docs/Web/JavaScript")}>
							<img src="001-js.png" alt="js" />
							<span>JavaScript</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://es.react.dev/")}>
							<img src="reactIcon.png" alt="react" />
							<span>React</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://vitejs.dev/")}>
							<img src="viteIcon.png" alt="Vite" />
							<span>Vite</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://getbootstrap.com/")}>
							<img src="bootstrapIcon.png" alt="Bootstrap" />
							<span>Bootstrap</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://redux.js.org/")}>
							<img src="reduxIcon.png" alt="redux" />
							<span>Redux</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://developer.mozilla.org/es/docs/Web/CSS")}>
							<img src="002-trofeo.png" alt="css" />
							<span>CSS</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://developer.mozilla.org/en-US/docs/Web/HTML")}>
							<img src="003-trofeo-1.png" alt="html" />
							<span>HTML</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://nodejs.org/es/about")}>
							<img src="004-nodo-js.png" alt="node" />
							<span>NodeJs</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://expressjs.com/es/")}>
							<img src="express.jpg" alt="express" />
							<span>Express</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://sequelize.org/")}>
							<img src="sequelize.png" alt="sequelize" />
							<span>Sequelize</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://www.postgresql.org/about/")}>
							<img src="006-postgre.png" alt="postgresql" />
							<span>PostgreSQL</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://www.mysql.com/")}>
							<img src="005-mysql.png" alt="mysql" />
							<span>MySQL</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://www.ibm.com/mx-es/topics/rest-apis")}>
							<img src="016-http.png" alt="apiREST" />
							<span>API REST</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://git-scm.com/")}>
							<img src="008-git.png" alt="git" />
							<span>GIT</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://github.com/")}>
							<img src="009-github.png" alt="GitHub" />
							<span>GitHub</span>
						</div>
						<div className={style.skill} onClick={() => handleClickDocs("https://rockcontent.com/es/blog/ui-ux/")}>
							<img src="012-interfaz-de-usuario.png" alt="ui/ux" />
							<span>UI/UX Design</span>
						</div>

				</div>
				<div className={style.softSkills}>
					<div className={style.title}>
					  <h3>Soft Skills</h3>
					</div>
						<p>Metodologías ágiles: experiencia trabajando en equipo.</p>
						<p>GIT: experiencia en control de versiones con GIT.</p>
						<p>Comunicación.</p>
						<p>Resolución de problemas. </p>
						<div className={style.images}>
							<img src="010-scrum.png" alt="scrum" />
							<img src="011-agil.png" alt="GIT" />
							<img src="013-conversacion.png" alt="comunication" />
							<img src="014-habilidades.png" alt="resolution" />
							<img src="015-ayuda.png" alt="help" />
						</div>
				</div>
			</div>
		</>
	)
}

export default TechSkills;