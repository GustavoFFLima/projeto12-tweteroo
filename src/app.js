import express from 'express'
import cors from "cors"

const app = express()
const PORT = 5000

let usuarios = []
let tweet = []
let avatarLogado = [{avatar:""}]

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
  if(!usuarios.find((item) => item.username === dados.username)) {
    res.send("UNAUTHORIZED")
  }
  tweet.push({...avatarLogado, ...dados})

  res.send("ok")
})


// app.get("/tweets", (req, res) =>{
//     //salvar os dados do usuario
//     res,send('ok')
// })



