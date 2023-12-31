const { Router } = require('express');
const routerProjects = Router();

const { postProjectsHandler, getAllProjectsHandler, getProjectByIdHandler, putProjectHandler, deleteProjectsHandler } = require('../../handlers/projectHandlers/projectHandlers.js');

routerProjects.post('/create', postProjectsHandler);
routerProjects.get('/allProjects', getAllProjectsHandler);
routerProjects.get('/getId/:id', getProjectByIdHandler);
routerProjects.put('/update/:id', putProjectHandler);
routerProjects.delete('/delete/:id', deleteProjectsHandler);

module.exports = routerProjects;