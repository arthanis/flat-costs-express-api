const db = require('../models');
const Category = db.category;
const Cost = db.cost;
const Op = db.Sequelize.Op;

/**
 * Create cost
 * @param {*} req
 * @param {*} res
 */
module.exports.create = (req, res) => {
  if (!req.body.categoryId || !req.body.value || !req.body.date) {
    res.status(400).send({
      message: 'All fields are required!'
    });

    return;
  }

  // Check category is exists
  Category.findByPk(req.body.categoryId)
    .then(result => {
      if (result) {
        Cost.create({
          value: req.body.value,
          date: req.body.date,
          categoryId: req.body.categoryId
        })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || 'Some error occurred while creating the Cost.'
          });
        });
      } else {
        res.status(500).send({
          message: "Cannot create the Cost, because the associated Category does not exist."
        });
      }
    })
    .catch(err => {
      console.log(err);
    })
};

/**
 * Get all costs
 * @param {*} req
 * @param {*} res
 */
module.exports.findAll = (req, res) => {
  Cost.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving costs.'
      });
    });
};

/**
 * Get cost by id
 * @param {*} req
 * @param {*} res
 */
module.exports.findOne = (req, res) => {
  const id = req.params.id;

  Cost.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Cost with id = ${id}.`
      });
    });
};

/**
 * Update cost
 * @param {*} req
 * @param {*} res
 */
module.exports.update = (req, res) => {
  const id = req.params.id;

  // Check category is exists
  Category.findByPk(req.body.categoryId)
    .then(result => {
      if (result) {
        Cost.update(req.body, {
          where: { id: id }
        })
        .then(num => {
          if (Boolean(num)) {
            res.send({
              message: 'Cost was updated successfully.'
            });
          } else {
            res.send({
              message: `Cannot update Cost with id = ${id}. Maybe Cost was not found or req.body is empty.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: `Error updating Cost with id = ${id}`
          });
        });
      } else {
        res.status(500).send({
          message: "Cannot update the Cost, because the associated Category does not exist."
        });
      }
    });
};

/**
 * Delete cost
 * @param {*} req
 * @param {*} res
 */
module.exports.delete = (req, res) => {
  const id = req.params.id;

  Cost.destroy({
      where: { id: id }
    })
    .then(num => {
      if (Boolean(num)) {
        res.send({
          message: 'Cost was deleted successfully.'
        });
      } else {
        res.send({
          message: `Cannot delete Cost with id = ${id}. Maybe Cost was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Cost with id = ${id}.`
      });
    });
};
