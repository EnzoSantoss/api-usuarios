const AddressModel = require("../model/addressModel");
const UserModel = require("../model/userModel");
module.exports = class userAddressController {
  static async getUserAddress(req, res) {
    const userAddressID = req.params.id_endereco_usuario;
    try {
      const userAddress = await AddressModel.findOne({
        where: { id_endereco_usuario: userAddressID },
        include: UserModel,
        plain: true,
      });
      res.json({
        codigo: 200,
        status: "sucesso",
        mensagem: "Endereço resgatado do sistema",
        dados: [
          {
            userAddress,
          },
        ],
      });
    } catch (err) {
      res.json({
        codigo: 400,
        status: "Falhou",
        mensagem: "Um erro ocorreu !, não foi possivel regastar esse usuario",
        dados: [{}],
      });
      return;
    }
  }

  static async saveUserAddress(req, res) {
    const userAddres = {
      id_usuario: req.body.id_usuario,
      logradouro: req.body.logradouro,
      numero: req.body.numero,
      cidade: req.body.cidade,
      cep: req.body.cep,
      bairro: req.body.bairro,
      complemento: req.body.complemento,
    };

    try {
      await AddressModel.create(userAddres);
      res.json({
        codigo: 200,
        status: "sucesso",
        mensagem: "Endereço Salvo com sucesso em nosso sistema",
        dados: [
          {
            userAddres,
          },
        ],
      });
    } catch (e) {
      console.log(e);
      res.json({
        codigo: 400,
        status: "Falhou",
        mensagem:
          "Não foi possivel salvar o endereço em nosso sistema, por gentiliza verifique se todos os campos obrigatórios estão preenchidos",
        dados: [
          {
            userAddres,
          },
        ],
      });
    }
  }

  static async deleteUserAddress(req, res) {
    const userIDAddressUser = req.params.id_endereco_usuario;

    await AddressModel.destroy({
      where: { id_endereco_usuario: userIDAddressUser },
    });
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Endereço deletado com sucesso",
      dados: [
        {
          //{...} colocar os dados aqui
          userIDAddressUser,
        },
      ],
    });
  }

  static async updateUserAddress(req, res) {
    const userIDAddress = req.params.id_endereco_usuario;

    const newUserAddres = {
      id_usuario: req.body.id_usuario,
      logradouro: req.body.logradouro,
      numero: req.body.numero,
      cidade: req.body.cidade,
      cep: req.body.cep,
      bairro: req.body.bairro,
      complemento: req.body.complemento,
    };

    try {
      await AddressModel.update(newUserAddres, {
        where: { id_endereco_usuario: userIDAddress },
      });

      res.json({
        codigo: 200,
        status: "sucesso",
        mensagem: "Endereço atualizado com sucesso",
        dados: [
          {
            //{...} colocar os dados aqui
            newUserAddres,
          },
        ],
      });
    } catch (err) {
      res.json({
        codigo: 400,
        status: "falhou",
        mensagem: "não foi possivel atualizar esse endereço",
        dados: [
          {
            newUserAddres,
          },
        ],
      });
    }
  }
};
