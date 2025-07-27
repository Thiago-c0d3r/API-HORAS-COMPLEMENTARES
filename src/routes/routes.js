const express = require("express");
const router = express.Router();
const { 
  exibirHorasComplementares,
  cadastrarHorasComplementares,
  atualizarHorasComplementares,
  deletarHorasComplementares,
  aprovarHora
} = require("../controllers/controller");
const autenticarUsuario = require("../middlewares/autenticarUsuario");
const validarHorasComplementares = require("../middlewares/validacao");
const autorizarCoordenador = require("../middlewares/autorizarCoordenador");

router.post("/horas", autenticarUsuario, cadastrarHorasComplementares);
router.get("/", autenticarUsuario, exibirHorasComplementares);
router.patch("/horas/:id/aprovar", autenticarUsuario, autorizarCoordenador, aprovarHora);
router.put("/:id", autenticarUsuario, validarHorasComplementares, atualizarHorasComplementares);
router.delete("/:id", autenticarUsuario, deletarHorasComplementares);

module.exports = router;