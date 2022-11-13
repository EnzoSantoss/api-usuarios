const AddressModel = require("../model/addressModel");
module.exports = class userAddressController {
  //   static getUsersAddress(req, res) {
  //     res.json({
  //       codigo: 200,
  //       status: "sucesso",
  //       mensagem: "Ação Realizada com sucesso",
  //       dados: [
  //         {
  //           //{...} colocar os dados aqui
  //         },
  //       ],
  //     });
  //   }

  static getUserAddress(req, res) {
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

  static saveUserAddress(req, res) {
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

  static deleteUserAddress(req, res) {
    const userIDAddressUser = req.params.id_endereco_usuario;
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          //{...} colocar os dados aqui
          userIDAddressUser,
        },
      ],
    });
  }

  static updateUserAddress(req, res) {
    const userIDAddressUser = req.params.id_endereco_usuario;
    res.json({
      codigo: 200,
      status: "sucesso",
      mensagem: "Ação Realizada com sucesso",
      dados: [
        {
          //{...} colocar os dados aqui
          userIDAddressUser,
        },
      ],
    });
  }
};
