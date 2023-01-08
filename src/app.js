import express from 'express'
import cors from "cors"

const app = express()
const PORT = 5000

const usuarios = []

const tweet = []

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log(`esta rodando belezinha na porta : ${PORT}`))

app.post("/sign-up", (req, res) =>{
    const dados = req.body
    const id = usuarios.length + 1;

    dados.id = id;
    usuarios.push(dados)

    res.send("ok")
})

app.post("/tweets", (req, res) =>{
  const dados = req.body
  const id = tweet.length + 1;

  dados.id = id;
  if(!usuarios.find(dados.username)) {
    return `UNAUTHORIZED`
  }
  tweet.push(dados)

  res.send("ok")
})


// app.get("/tweets", (req, res) =>{
//     //salvar os dados do usuario
//     res,send('ok')
// })



