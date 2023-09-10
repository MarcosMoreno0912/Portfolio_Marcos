const postProjects = require('../../controllers/projects/postProjects.js');
const getAllProjects = require('../../controllers/projects/getAllProjects.js');
const getProjectById = require('../../controllers/projects/getProjectById.js');
const putProject = require('../../controllers/projects/putProjects.js');

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
};

const getAllProjectsHandler = async (req, res) => {
	try {
		const allProjects = await getAllProjects()
		return res.status(201).json(allProjects)
	} catch(error) {
		console.error('Ocurrió un error al obtener los proyectos', error);
		return res.status(500).json({ error: error.message });
	}
};

const getProjectByIdHandler = async (req, res) => {
	const id = req.params.id;
	try {
		const projectId = getProjectById(id)
		return res.status(201).json({ projectId })
	} catch(error) {
		console.error('Ocurrió un error al obtener el proyecto', error);
		return res.status(500).json({ error: error.message })
	}
};

const putProjectHandler = async (req, res) => {
	const id = req.params.id;
	const {name, description, technologies, image, dateCreation, urlDeploy, urlRepo} = req.body;
	try {
	  if(!name || !description || !technologies || !image || !dateCreation || !urlDeploy || !urlRepo){
	  	return res.status(404).json({ error: 'Alguno de los datos está vacío o falta' });
	  }

	  const updateProject = await putProject(id, name, description, technologies, image, dateCreation, urlDeploy, urlRepo)
	  return res.status(201).json(updateProject)
	} catch(error) {
		console.error('Ocurrió un error al actualizar el proyecto', error);
		return res.status(500).json({ error: error.message });
	}
}

module.exports = { postProjectsHandler, getAllProjectsHandler, getProjectByIdHandler, putProjectHandler };