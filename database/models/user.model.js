const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}

class User extends Model {
  static init(sequelize) {
    return super.init(UserSchema, {
      sequelize,
      tableName: USER_TABLE,
      timestamps: true
    });
  }
}

module.exports = User
