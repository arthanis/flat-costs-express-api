module.exports = app => {
  const router = require('express').Router();

  // Retrieve all columns (@todo - dynamic)
  router.get('/config', (req, res) => res.json({
    columns: {
      categories: ['name'],
      costs: ['categoryId', 'date', 'value'],
    },
  }));

  app.use('/api', router);
};
