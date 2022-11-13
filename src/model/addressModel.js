const { DataTypes } = require("Sequelize");
const db = require("../db/conn");
const User = require("./userModel");

const Address = db.define("enderecos_usuario", {
  id_endereco_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    require: true,
  },
  logradouro: {
    type: DataTypes.STRING,
    require: true,
  },
  numero: {
    type: DataTypes.STRING,
    require: true,
  },
  cidade: {
    type: DataTypes.STRING,
    require: true,
  },
  cep: {
    type: DataTypes.STRING,
    require: true,
  },
  bairro: {
    type: DataTypes.STRING,
    require: true,
  },
  complemento: {
    type: DataTypes.STRING,
  },
});

Address.belongsTo(User, {
  constraints: true,
  foreignKey: "id_usuario",
});

module.exports = Address;
