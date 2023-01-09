import express from 'express'
import cors from "cors"

const app = express()
const PORT = 5000

let usuarios = []
let tweet = [
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 1
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 2
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 3
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 4
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 5
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 6
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 7
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 8
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 9
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 10
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 11
    },
    {
      "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
      "username": "bobesponja",
      "tweet": "eu amo o hub",
      "id": 12
    }
  ]
let avatarLogado = {avatar:""}

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log(`esta rodando belezinha na porta : ${PORT}`))

app.post("/sign-up", (req, res) =>{
    const dados = req.body
    const id = usuarios.length + 1;

    dados.id = id;
    usuarios.push(dados)
    avatarLogado = {avatar:dados.avatar}

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

  res.send(tweet)
})


app.get("/tweets", (req, res) =>{
    if(tweet.length > 10) {
      const ultimosTweets = tweet.slice(-10, tweet.length)
      console.log(ultimosTweets)
      return res.send(ultimosTweets)
    }
    res.send(tweet)
})



