const express = require('express');

const appRoute = express.Router({ strict: true, mergeParams: true });

const controller = require(`${basePath}/app/controllers/user.controllers/user.main.controller`);
const acl = require(`${basePath}/app/middlewares/accessControl/entities/user/main`);
const authMiddleware = require(`${basePath}/app/middlewares/accessControl/entities/auth/main`);
const validator = require(`${basePath}/app/middlewares/dataValidators/entities/user/main`);
const mapper = require(`${basePath}/app/middlewares/dataMappers/entities/user/main`);
const loader = require(`${basePath}/app/middlewares/entityLoaders/entities/user/main`);


appRoute.get('/',
  authMiddleware.isAuthenticated,
  authMiddleware.isAdmin,
  validator.getAll,
  acl.getAll,
  loader.getAll,
  controller.getAll,
);

appRoute.get('/:userId',
  authMiddleware.isAuthenticated,
  acl.getOne,
  validator.getOne,
  loader.getOne,
  controller.getOne,
);


appRoute.put('/:userId',
  authMiddleware.isAuthenticated,
  acl.updateOne,
  validator.updateOne,
  mapper.updateOne,
  loader.updateOne,
  controller.updateOne,
);


appRoute.delete('/:userId',
  authMiddleware.isAuthenticated,
  authMiddleware.isAdmin,
  acl.deleteOne,
  validator.deleteOne,
  loader.deleteOne,
  controller.deleteOne,
);


module.exports = appRoute;
