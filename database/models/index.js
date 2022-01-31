const User = require('./user.model');

function setupModels(sequelize) {
  User.init(sequelize);
}

module.exports = setupModels;
