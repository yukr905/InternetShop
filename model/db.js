const {Sequelize} = require('sequelize')

module.exports = new Sequelize("online_store", "postgres", "123456", {
  dialect: "postgres",host:"localhost",port:"5432"
});