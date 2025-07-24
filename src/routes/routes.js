const express = require("express");
const router = express.Router(); 
const { 
    exibirHorasComplementares,
    cadastrarHorasComplementares,
    atualizarHorasComplementares,
    deletarHorasComplementares
} = require("../controller/controller");
const validarHorasComplementares = require("../middlewares/validacao");


router.get("/visualizar", exibirHorasComplementares);

router.post("/cadastrar", validarHorasComplementares, cadastrarHorasComplementares);

router.put("/:id", validarHorasComplementares, atualizarHorasComplementares);

router.delete("/:id", deletarHorasComplementares);

module.exports = router;