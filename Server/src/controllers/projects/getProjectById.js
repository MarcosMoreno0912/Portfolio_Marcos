const { Projects } = require('../../db.js');

const getProjectById = async (id) => {
	try {
		const projectId = await Projects.findByPk(id)
		console.log(projectId)
		return projectId
	} catch(error) {
		console.error(error);
		throw error;
	}
}

module.exports = getProjectById;