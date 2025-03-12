const { Sequelize } = require('sequelize');

console.log(process.env.DATABASE_URL)


const sequelize = new Sequelize('green-it', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
