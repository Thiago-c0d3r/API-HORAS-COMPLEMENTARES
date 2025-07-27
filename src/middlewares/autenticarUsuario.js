const jwt = require("jsonwebtoken");

function autenticarUsuario(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ erro: "Token não enviado" });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const usuario = jwt.verify(token, "segredo123");
    req.usuario = usuario; // Aqui salvamos { id, role }
    next();
  } catch (error) {
    return res.status(401).json({ erro: "Token inválido ou expirado" });
  }
}

module.exports = autenticarUsuario;