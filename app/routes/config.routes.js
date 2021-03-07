module.exports = app => {
  const router = require('express').Router();

  // Retrieve all columns
  router.get('/config', (req, res) => res.json({
    columns: {
      categories: [{
        name: 'name',
        type: 'text',
      }],
      costs: [{
        name: 'categoryId',
        type: 'select',
        options: {
          belongsTo: 'categories',
          belongsToName: 'category'
        }
      }, {
        name: 'date',
        type: 'date'
      }, {
        name: 'value',
        type: 'number'
      }],
    },
  }));

  app.use('/api', router);
};
