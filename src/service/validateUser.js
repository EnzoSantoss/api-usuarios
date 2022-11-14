const UserModel = require("../model/userModel");

async function validating(user, req, res) {
  if (user.email && user.cpf) {
    let existeEmail = await UserModel.findOne({
      where: { email: user.email },
    });
    let existeCPF = await UserModel.findOne({
      where: { cpf: user.cpf },
    });

    return { existeEmail, existeCPF };
  } else {
    return false;
  }
}

module.exports = validating;
