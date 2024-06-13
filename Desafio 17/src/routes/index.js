const { Router } = require("express");

const usersRouter = require("./users.routes") //Router com r ou s?

const routes = Router();

routes.use("/users", usersRouter);

module.exports = routes;