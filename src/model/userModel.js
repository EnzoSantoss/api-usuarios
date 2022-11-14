const { DataTypes } = require("Sequelize");
const db = require("../db/conn");
//const Address = require("./addressModel");

const User = db.define("usuarios", {
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
});

module.exports = User;
