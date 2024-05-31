const express = require('express');

const { viewUser, addUser, createUser } = require('../controllers/CrudController');

const routes = express.Router();

routes.get('/',viewUser)
routes.get('/adduser',addUser)
routes.post('/createUser',createUser)

module.exports = routes;