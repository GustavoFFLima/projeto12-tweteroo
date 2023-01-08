import express from 'express'

const app = express()
const PORT = 5000

let usuarios = {
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}

let tweet = {
	username: "bobesponja",
  tweet: "eu amo o hub"
} 


app.listen(PORT, () => console.log(`esta rodando belezinha na porta : ${PORT}`))