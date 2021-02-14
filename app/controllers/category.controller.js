const db = require('../models');
const Category = db.category;
const Op = db.Sequelize.Op;

/**
 * Create category
 * @param {*} req
 * @param {*} res
 */
module.exports.create = (req, res) =>{
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });

    return;
  }

  Category.create({
      name: req.body.name
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Category'
      });
    });
};

/**
 * Get all categories
 * @param {*} req
 * @param {*} res
 */
module.exports.findAll = (req, res) => {
  Category.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving categories.'
      });
    });
};

/**
 * Get category by id
 * @param {*} req
 * @param {*} res
 */
module.exports.findOne = (req, res) => {
  const id = req.params.id;

  Category.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Category with id = ${id}`
      });
    });
};

/**
 * Update category
 * @param {*} req
 * @param {*} res
 */
module.exports.update = (req, res) => {
  const id = req.params.id;

  Category.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (Boolean(num)) {
        res.send({
          message: 'Category was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Category with id = ${id}. Maybe Category was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Category with id = ${id}`
      });
    });
};

module.exports.delete = (req, res) => {
  const id = req.params.id;

  Category.destroy({
      where: { id: id }
    })
    .then(num => {
      if (Boolean(num)) {
        res.send({
          message: 'Category was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Category with id = ${id}. Maybe Category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Category with id = ${id}`
      });
    });
};
