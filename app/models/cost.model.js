module.exports = (sequelize, Sequelize) => {
  const Category = require('./category.model')(sequelize, Sequelize);
  const Cost = sequelize.define('costs', {
    value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
  });

  Cost.belongsTo(Category);

  return Cost;
};
