import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import { msgRouter } from './Routes/MensagemRouter'


dotenv.config()


const app = express()


app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})


//ENDPOINTS

app.use("/mensagem", msgRouter)
