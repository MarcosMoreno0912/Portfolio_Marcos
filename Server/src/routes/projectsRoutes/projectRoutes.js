const { Router } = require('express');
const routerProjects = Router();

const { postProjectsHandler, getAllProjectsHandler, getProjectByIdHandler } = require('../../handlers/projectHandlers/projectHandlers.js');

routerProjects.post('/create', postProjectsHandler);
routerProjects.get('/allProjects', getAllProjectsHandler);
routerProjects.get('/getId/:id', getProjectByIdHandler);

module.exports = routerProjects;