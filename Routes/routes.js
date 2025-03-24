const expess = require('express');
const routes = expess.Router();
const bodyParser = require('body-parser')
const useController = require('../controller/controller')

console.log(useController);

routes.use(bodyParser.json())
routes.use(bodyParser.urlencoded({ extended: true }));

routes.get("/", useController.allUsers )

routes.get("/api/payment" ,useController.payment)

module.exports = routes;



