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
    allowNull: false,
  },
  logradouro: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
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
