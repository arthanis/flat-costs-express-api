module.exports = app => {
  const router = require('express').Router();

  // Retrieve all columns
  router.get('/config', (req, res) => res.json({
    entities: {
      categories: {
        names: {
          singular: 'category',
          plural: 'categories',
        },
        columns: [{
          name: 'name',
          type: 'text',
        }],
      },
      costs: {
        names: {
          singular: 'cost',
          plural: 'costs',
        },
        columns: [{
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
      }
    },
  }));

  app.use('/api', router);
};
