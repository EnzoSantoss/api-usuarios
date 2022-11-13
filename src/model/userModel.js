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
  },
  sobrenome: {
    type: DataTypes.STRING,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    require: true,
  },
  telefone: {
    type: DataTypes.STRING,
    require: true,
  },
  cpf: {
    type: DataTypes.STRING,
    require: true,
  },
});

module.exports = User;
