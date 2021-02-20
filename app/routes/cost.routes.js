module.exports = app => {
  const costs = require('../controllers/cost.controller.js');
  const router = require('express').Router();

  // Create a new cost
  router.post('/costs', costs.create);

  // Retrieve all costs
  router.get('/costs', costs.findAll);

  // Retrieve a single cost with id
  router.get('/costs/:id', costs.findOne);

  // Update a cost with id
  router.put('/costs/:id', costs.update);

  // Delete a cost with id
  router.delete('/costs/:id', costs.delete);

  app.use('/api', router);
};
