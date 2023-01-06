import express from 'express'

const app = express()
const PORT = 5000


app.listen(PORT, () => console.log(`esta rodando belezinha na porta : ${PORT}`))