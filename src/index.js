const express = require("express");
const app = express();
app.use(express.json());   
const router = require("./routes/routes"); 
const authRoutes = require("./routes/authRoutes");

app.use("/horas-complementares", router); 
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});