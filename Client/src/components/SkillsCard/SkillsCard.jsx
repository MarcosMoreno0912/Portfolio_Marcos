import React from 'react';
import style from './SkillsCard.module.css';

const SkillsCard = () => {

	return (
		<>
			<div className={style.container}>
				<div className={style.skill}>
					<h3>Tech Stack</h3>
						< className={style.tech}>
							<img src="../../../public/001-js.png" alt="js" />
							<span>JavaScript</span>
						</>
				</div>


			</div>
		</>
	)
}

export default SkillsCard;