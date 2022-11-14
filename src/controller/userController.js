const UserModel = require("../model/userModel");
const validating = require("../service/validateUser");
module.exports = class userController {
  static testeFunc(req, res) {
    res.send("testand rota ");
  }

  static async getUsers(req, res) {
    const AllUsers = await UserModel.findAll();
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          AllUsers,
        },
      ],
    });
  }

  static async getUser(req, res) {
    const userID = req.params.id_usuario;
    const user = await UserModel.findOne({ where: { id_usuario: userID } });

    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          user,
        },
      ],
    });
  }

  static async saveUser(req, res) {
    const newUser = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      telefone: req.body.telefone,
      cpf: req.body.cpf,
    };
    const { existeEmail, existeCPF } = await validating(newUser, req, res);

    if (existeEmail) {
      //res.status(400).send("Email ja cadastrado em nosso sistema");
      res.status(400).json({
        codigo: 400,
        status: "falhou",
        mensagem:
          "Não foi possivel registrar o usuario no sistema - Email ja cadastrado no sistema",
        dados: [
          {
            newUser,
          },
        ],
      });
    } else if (existeCPF) {
      //res.status(400).send("CPF ja cadastrado em nosso sistema");
      res.status(400).json({
        codigo: 400,
        status: "falhou",
        mensagem:
          "Não foi possivel registrar o usuario no sistema - CPF já cadastrado no sistema",
        dados: [
          {
            newUser,
          },
        ],
      });
    } else {
      try {
        await UserModel.create(newUser);
        res.json({
          codigo: 200,
          status: "sucesso",
          mensagem: "Usuario Adicionado com sucesso no sistema",
          dados: [
            {
              newUser,
            },
          ],
        });
      } catch (err) {
        console.log("erro");
        console.log(err);
        res.json({
          codigo: 400,
          status: "falhou",
          mensagem:
            "Não foi possivel registrar o usuario no sistema - Faltando informações !",
          dados: [{}],
        });
        return;
      }
    }
  }

  static async deleteUser(req, res) {
    const userID = req.params.id_usuario;

    await UserModel.destroy({ where: { id_usuario: userID } });

    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Usuario Excluido do sistema",
      dados: [
        {
          userID,
        },
      ],
    });
  }

  static async updateUser(req, res) {
    const userID = req.params.id_usuario;
    const updateUser = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      telefone: req.body.telefone,
      cpf: req.body.cpf,
    };

    await UserModel.update(updateUser, { where: { id_usuario: userID } });
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Usuario Atualizado com sucesso no sistema",
      dados: [
        {
          updateUser,
        },
      ],
    });
  }
};
