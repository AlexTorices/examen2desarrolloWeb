const express = require("express")
const mongoose = require("mongoose")
const deckRoutes = require("./routes/deck")

//URI=> usuario:password@ip:puerto/bd_nombre?authSource=db_usuarios
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/deck", deckRoutes)

mongoose.connect('mongodb://user3:root@54.234.54.143:27017/base3?authSource=base3')
    .then(
        app.listen(8080,()=>console.log("Servidor en línea"))
    )
    .catch(err=>console.log(err))