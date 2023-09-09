const { Projects } = require('../../db.js');

const postProjects = async (name, description, technologies, image, dateCreation, urlDeploy, urlRepo) => {
	try {
		const newProject = await Projects.create({
			name,
			description,
			technologies,
			image,
			dateCreation,
			urlDeploy,
			urlRepo,
		});

		console.log(newProject)
		return newProject;
	} catch(error) {
		console.error('Error al crear el proyecto', error);
		throw error;
	}
};

module.exports = postProjects;