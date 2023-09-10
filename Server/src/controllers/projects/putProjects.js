const { Projects, Technologies } = require('../../db.js');

const putProject = async (id, name, description, technologies, image, dateCreation, urlDeploy, urlRepo) => {
	try {
		const project = await Projects.findByPk(id)
		if(!project){
			throw new Error('Proyecto no encontrado')
		}

		project.name = name,
		project.description = description,
		project.technologies = technologies,
		project.image = image,
		project.dateCreation = dateCreation,
		project.urlDeploy = urlDeploy,
		project.urlRepo = urlRepo,

		await project.save()
		return project

	} catch(error) {
		console.error(error);
		throw error;
	}
}

module.exports = putProject;