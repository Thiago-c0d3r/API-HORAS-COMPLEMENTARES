const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../database/pool");

const cadastrar = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        await pool.query(
            "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)",
            [nome, email, senhaCriptografada]
        );
        return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ erro: "Erro ao cadastrar usuário" });
    }
};

const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const resultado = await pool.query(
            "SELECT id, role, senha FROM usuarios WHERE email = $1",
            [email]
        );
        const usuario = resultado.rows[0];

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ erro: "Senha inválida" });
        }

        const token = jwt.sign({ id: usuario.id, role: usuario.role }, "segredo123", { expiresIn: "1h" });
        return res.json({ mensagem: "Login realizado", token });
    } catch (error) {
        return res.status(500).json({ erro: "Erro no login" });
    }
};

module.exports = { cadastrar, login };