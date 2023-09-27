import React from 'react';
import { useNavigate } from 'react-router-dom'
import style from './NavBar.module.css';

const NavBar = () => {
	const navigate = useNavigate()

	const handleHomeClick = () => {
		navigate('/')
	};

	const handleAboutClick = () => {
		navigate('/about')
	};

	const handleTechSkillsClick = () => {
		navigate('/skills')
	};

	const handleProjectsClick = () => {
		navigate('/projects')
	};

 	const handleContactMeClick = () => {
		navigate('/contact')
	};

	return (
		<div className={style.nav} >
			
			<img src="../../../pestañaPortfolio.jpg" alt="Logo" onClick={handleHomeClick}/>

			<button>
    		<span className={style.box} onClick={handleHomeClick}>
        	Home
    		</span>
			</button>

			<button>
    		<span className={style.box} onClick={handleAboutClick}>
        	About Me
    		</span>
			</button>

			<button>
    		<span className={style.box} onClick={handleTechSkillsClick}>
        	Tech Skills
    		</span>
			</button>

			<button>
    		<span className={style.box} onClick={handleProjectsClick}>
        	Projects
    		</span>
			</button>

			<button>
    		<span className={style.box} onClick={handleContactMeClick}>
        	Contact Me
    		</span>
			</button>
		</div>
	)
}

export default NavBar;