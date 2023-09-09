const postProjects = require('../../controllers/projects/postProjects.js');
const getAllProjects = require('../../controllers/projects/getAllProjects.js');


const postProjectsHandler = async (req, res) => {
	const { name, description, technologies, image, dateCreation, urlDeploy, urlRepo } = req.body
	try {
		const createProject = postProjects(name, description, technologies, image, dateCreation, urlDeploy, urlRepo);
		if(!name || !description || !technologies || !image || !dateCreation || !urlRepo){
			return res.status(404).json({ error: 'Alguno de los datos no se encuentra o está vacío' })
		} else {
			return res.status(201).json(createProject)
		}
	} catch(error) {
		console.error('Ocurrió un error al crear el proyecto' ,error);
		return res.status(500).json({ error: error.message });
	}
}

const getAllProjectsHandler = async (req, res) => {
	try {
		const allProjects = await getAllProjects()
		return res.status(201).json(allProjects)
	} catch(error) {
		console.error('Ocurrió un error al obtener los proyectos', error);
		return res.status(500).json({ error: error.message });
	}
}

module.exports = { postProjectsHandler, getAllProjectsHandler };