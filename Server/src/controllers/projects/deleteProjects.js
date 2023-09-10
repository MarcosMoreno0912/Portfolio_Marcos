const { Projects } = require('../../db.js');

const deleteProject = async (id) => {
	try {
		projectDelete = await Projects.findByPk(id)
		if(!projectDelete){
			throw new Error('No se encontró el proyecto');
		}

		await projectDelete.destroy()
		return 'Proyecto eliminado con éxito'
	} catch(error) {
		console.error('Ocurrió un error al eliminar el proyecto', error);
		throw error;
	}
}

module.exports = deleteProject;