import React from 'react';
import { useNavigate } from 'react-router-dom'
import style from './NavBar.module.css';

const NavBar = () => {
	const navigate = useNavigate()

	const handleHomeClick = () => {
		navigate('/')
	};

	return (
		<div className={style.nav} >
			
			<img src="../../../public/assets/icons/pestañaPortfolio.jpg" alt="Logo" />

			<button>
    		<span className={style.box} onClick={handleHomeClick}>
        	Home
    		</span>
			</button>

			<button>
    		<span className={style.box}>
        	About Me
    		</span>
			</button>

			<button>
    		<span className={style.box}>
        	Tech Skills
    		</span>
			</button>

			<button>
    		<span className={style.box}>
        	Projects
    		</span>
			</button>

			<button>
    		<span className={style.box}>
        	Contact Me
    		</span>
			</button>
		</div>
	)
}

export default NavBar;