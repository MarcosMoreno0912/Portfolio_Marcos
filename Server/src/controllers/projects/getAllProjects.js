const { Projects, Technologies } = require('../../db.js');

const getAllProjects = async () => {
	try {
		const allProjects = Projects.findAll({
			include: {
				model: Technologies,
				attributes: ['name'],
				required: false,
			},
		})

		return allProjects;
	} catch(error) {
		console.error('Error al obtener todos los proyectos', error);
		throw error
	}
}

module.exports = getAllProjects;