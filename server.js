import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    return res.json("Hello World!")
})

const PORT = process.env.PORT || 6000

app.listen(PORT, ()=> console.log(`O servidor foi iniciado na porta ${PORT}`))