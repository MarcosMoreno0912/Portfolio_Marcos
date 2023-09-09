const { Router } = require('express');
const routes = Router();

const routerProjects = require('./projectsRoutes/projectRoutes.js');

routes.use('/projects', routerProjects);

module.exports = routes;