const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pwd: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  prefs: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue:['TRANSPORT','ALIMENTATION','VESTIMENTAIRE','ELECTRONIQUE','ENTRETIENT']
  },
}, {
  tableName: 'user',
  timestamps: false,
});

module.exports = User;
