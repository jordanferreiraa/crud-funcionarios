const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const User = db.define('User', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  funcao: {
    type: DataTypes.STRING,
    required: true
  },
  salario: {
    type: DataTypes.INTEGER,
    required: true
  }
})

module.exports = User