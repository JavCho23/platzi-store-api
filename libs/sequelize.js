const { Sequelize } = require('sequelize');
const SetupModels = require('../database/models');
const URI = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

SetupModels(sequelize);

sequelize.sync()

module.exports = sequelize
