const express = require("express");
const UserController = require("../controller/userController");
const UserControllerAddress = require("../controller/addressController");
const router = express.Router();

router.get("/teste", (req, res) => {
  res.status(200).json({
    codigo: 200,
    status: "sucesso",
    mensagem: "Ação Realizada com sucesso",
    dados: [
      {
        //{...} colocar os dados aqui
      },
    ],
  });
});

//Routas de usarios
router.get("/usuarios", UserController.getUsers);
router.get("/usuarios/:id_usuario", UserController.getUser);
router.post("/usuarios", UserController.saveUser);
router.delete("/usuarios/:id_usuario", UserController.deleteUser);
router.put("/usuarios/:id_usuario", UserController.updateUser);

//Rotas de endereço
router.get(
  "/enderecos-usuario/:id_endereco_usuario",
  UserControllerAddress.getUserAddress
);
router.get(
  "/enderecos-usuario/:id_usuario",
  UserControllerAddress.getUserAddress
);
router.post("/enderecos-usuario", UserControllerAddress.saveUserAddress);
router.delete(
  "/enderecos-usuario/:id_endereco_usuario",
  UserControllerAddress.deleteUserAddress
);
router.put(
  "/enderecos-usuario/:id_endereco_usuario",
  UserControllerAddress.updateUserAddress
);
module.exports = router;
