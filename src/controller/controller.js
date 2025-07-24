const pool = require("../database/pool");
//ROTA GET
const exibirHorasComplementares = async function (req, res) 
{
    try {
        const TOTAL_HORAS=360;
        const resultado = await pool.query("SELECT * FROM HorasComplementares");
        
       const somaHoras = await pool.query("SELECT SUM(horas) as total FROM HorasComplementares");
        
        const horasUsadas = somaHoras.rows[0].total || 0;
        const horasRestantes = TOTAL_HORAS - horasUsadas;

        return res.status(200).json({
            mensagem: "Horas complementares exibidas com sucesso!",
            horasComplementares: resultado.rows,
            horasRestantes: horasRestantes
        });

    } catch (erro) {
        console.error("Erro ao exibir horas complementares:", erro);
        return res.status(500).json({ erro: "Erro ao exibir horas complementares." });
    }
}

//ROTA POST
const cadastrarHorasComplementares = async function (req, res) {
    const { atividade,horas} = req.body;
    
    if (!atividade || !horas) {
        return res.status(400).json({ erro: "Atividade e horas são obrigatórios!" });
    }

    try {
        const resultado = await pool.query(`
            INSERT INTO HorasComplementares (atividade, horas)
            VALUES ($1, $2)
            RETURNING *;`, 
            [atividade, horas]);
        return res.status(201).json({
            mensagem: "Horas complementares cadastradas com sucesso!",
            horasComplementares: resultado.rows[0],
        });
    
    } catch (erro) {
        console.error("Erro ao cadastrar horas complementares:", erro);
        return res.status(500).json({ erro: "Erro ao cadastrar horas complementares." });
    }
}
//ROTA PUT
const atualizarHorasComplementares = async function (req, res) {
    const { id } = req.params;
    const { atividade, horas } = req.body;

    if (!atividade || !horas) {
        return res.status(400).json({ erro: "Atividade e horas são obrigatórios!" });
    }

    try {
        const resultado = await pool.query(`
            UPDATE HorasComplementares
            SET atividade = $1, horas = $2
            WHERE id = $3
            RETURNING *;`, 
            [atividade, horas, id]);

        if (resultado.rowCount === 0) {
            return res.status(404).json({ erro: "Horas complementares não encontradas." });
        }

        return res.status(200).json({
            mensagem: "Horas complementares atualizadas com sucesso!",
            horasComplementares: resultado.rows[0],
        });

    } catch (erro) {
        console.error("Erro ao atualizar horas complementares:", erro);
        return res.status(500).json({ erro: "Erro ao atualizar horas complementares." });
    }
}
//ROTA DELETE
const deletarHorasComplementares = async function (req, res) {
    const { id } = req.params;

    try {
        const resultado = await pool.query(`
            DELETE FROM HorasComplementares
            WHERE id = $1
            RETURNING *;`, 
            [id]);

        if (resultado.rowCount === 0) {
            return res.status(404).json({ erro: "Horas complementares não encontradas." });
        }

        return res.status(200).json({
            mensagem: "Horas complementares deletadas com sucesso!",
            horasComplementares: resultado.rows[0],
        });

    } catch (erro) {
        console.error("Erro ao deletar horas complementares:", erro);
        return res.status(500).json({ erro: "Erro ao deletar horas complementares." });
    }
}
module.exports = {
    exibirHorasComplementares,
    cadastrarHorasComplementares,
    atualizarHorasComplementares,
    deletarHorasComplementares
};