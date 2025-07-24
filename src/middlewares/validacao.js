function validacao(req,res, next){
    const {atividade, horas} = req.body;
    if (!atividade || !horas) {
        return res.status(400).json({ erro: "Atividade e horas são obrigatórios!" });
    }
    next();
}
    
    module.exports = validacao;
    