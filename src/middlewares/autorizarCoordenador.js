function autorizarCoordenador(req, res, next) {
  const { role } = req.usuario;

  if (role !== "coordenador") {
    return res.status(403).json({ erro: "Acesso restrito ao coordenador." });
  }

  next();
}

module.exports = autorizarCoordenador;