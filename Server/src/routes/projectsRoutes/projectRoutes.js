const { Router } = require('express');
const routerProjects = Router();

const { postProjectsHandler, getAllProjectsHandler } = require('../../handlers/projectHandlers/projectHandlers.js');

routerProjects.post('/create', postProjectsHandler);
routerProjects.get('/allProjects', getAllProjectsHandler);


module.exports = routerProjects;