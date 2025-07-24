const express = require("express");
const app= express();
app.use(express.json()); // Permite leitura de JSON   
const rotas= require("./routes/routes"); // Importa o módulo de rotas
app.use("/horas-complementares", rotas); 
app.listen(3000,()=>{
    console.log("Servidor rodando em http://localhost:3000");})
