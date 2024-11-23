const express = require("express");
const app = express()
Port = 3000 

app.get("/", (req , res) =>{ // aqui estou abrindo requisição e resposta na api 
    res.send("hello word")
})

app.listen(Port,() =>{
    console.log(`Node rodando na porta ${Port}`) // aqui estamos abrindo a porta do servidor, acresntar na pagina localhost3000
})