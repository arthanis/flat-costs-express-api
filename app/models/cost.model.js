module.exports = (sequelize, Sequelize) => {
  const Category = require('./category.model')(sequelize, Sequelize);
  const Cost = sequelize.define('costs', {
    value: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATEONLY
    },
  });

  Cost.belongsTo(Category);

  return Cost;
};
