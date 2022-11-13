const UserModel = require("../model/userModel");

module.exports = class userController {
  static testeFunc(req, res) {
    res.send("testand rota ");
  }

  static getUsers(req, res) {
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          //{...} colocar os dados aqui
        },
      ],
    });
  }

  static getUser(req, res) {
    const userID = req.params.id_usuario;
    console.log(userID);
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          userID,
        },
      ],
    });
  }

  static saveUser(req, res) {
    const {} = req.body;

    console.log();
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          //{...} colocar os dados aqui
        },
      ],
    });
  }

  static deleteUser(req, res) {
    const userID = req.params.id_usuario;
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          userID,
        },
      ],
    });
  }

  static updateUser(req, res) {
    const userID = req.params.id_usuario;
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          userID,
        },
      ],
    });
  }
};
