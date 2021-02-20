module.exports = app => {
  const categories = require('../controllers/category.controller.js');
  const router = require('express').Router();

  // Create a new category
  router.post('/categories', categories.create);

  // Retrieve all categories
  router.get('/categories', categories.findAll);

  // Retrieve a single category with id
  router.get('/categories/:id', categories.findOne);

  // Update a category with id
  router.put('/categories/:id', categories.update);

  // Delete a category with id
  router.delete('/categories/:id', categories.delete);

  app.use('/api', router);
};
