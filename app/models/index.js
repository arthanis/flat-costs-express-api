const dbConfig = require('../config/db.config.js');

const { max, min, acquire, idle } = dbConfig.pool;
const db = {};
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max,
        min,
        acquire,
        idle
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.category = require('./category.model.js')(sequelize, Sequelize);

module.exports = db;
