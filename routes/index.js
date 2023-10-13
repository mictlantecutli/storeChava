const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.myNameFunction);
routes.get('/newPerson', myController.anotherPerson);

module.exports = routes;