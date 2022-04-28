
const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql")
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "90211136",
    database: "posts"
})
app.use(cors())
app.use(express.json())

app.post("/saposAfrica"), (req, res)=>{
    const {nome} = req.body
    const {titulo} = req.body
    const {texto} = req.body
    const {foto} = req.body

    const sql = "INSERT INTO saposafrica (autor, titulo, texto, avatar) VALUES (?,?,?,?)"
        db.query(sql,[nome, titulo, texto, foto], (err, result)=>{
            console.log(err)
        })
}

app.listen(3001, ()=>{
    console.log("rodando servidor")
})
