import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import style from './NavBar.module.css';

const NavBar = () => {
	const navigate = useNavigate()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

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
			
			<button className={style.menuIcon} onClick={toggleMobileMenu}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </button>

      {/* Contenedor del menú móvil */}
      {mobileMenuOpen && (
        <nav className={style.mobileMenu}>
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={handleAboutClick}>About Me</button>
          <button onClick={handleTechSkillsClick}>Tech Skills</button>
    			<button onClick={handleProjectsClick}>Projects</button>
    			<button onClick={handleContactMeClick}>Contact Me</button>
        </nav>
      )}

			<button className={style.navBtn}>
    		<span className={style.box} onClick={handleHomeClick}>
        	Home
    		</span>
			</button>

			<button className={style.navBtn}>
    		<span className={style.box} onClick={handleAboutClick}>
        	About Me
    		</span>
			</button>

			<button className={style.navBtn}>
    		<span className={style.box} onClick={handleTechSkillsClick}>
        	Tech Skills
    		</span>
			</button>

			<button className={style.navBtn}>
    		<span className={style.box} onClick={handleProjectsClick}>
        	Projects
    		</span>
			</button>

			<button className={style.navBtn}>
    		<span className={style.box} onClick={handleContactMeClick}>
        	Contact Me
    		</span>
			</button>
		</div>
	)
}

export default NavBar;