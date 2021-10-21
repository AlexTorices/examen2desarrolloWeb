const mongoose = require("mongoose")
const deckRoutes = require("./routes/deck")

//URI=> usuario:password@ip:puerto/bd_nombre?authSource=db_usuarios
mongoose.connect('mongodb://user3:root@54.234.54.143:27017/base3?authSource=base3')
    .then(()=>console.log("Conexión exitosa"))
    .catch(err=>console.log(err))

    const PokemonSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        nombre:{
            type:String,
            required: true
        },
        numero:{
            type:Number
        },
        tipo: [String],
        descripcion:{
            type:String,
            required:false
        }
    },{collection:'pokemon'})

    // Crear el modelo a partir del esquema definido
    const Pokemon = mongoose.model('pokemon', PokemonSchema)

    // agregar un documento
    const pokemon1=new Pokemon({
        nombre: "Squirtle",
        descripcion: "Tortuga",
        numero: 7,
        tipo:["agua"],
        _id: new mongoose.Types.ObjectId()
    })

    //CREATE
    /*pokemon1.save()
        .then(()=>{
            console.log(pokemon1)
            console.log("Pokemon creado")
        })
        .catch(()=>console.log("error"))*/
    
// Pokemon.find({nombre:"Squirtle"})
// Pokemon.find({nombre:"Squirtle"})
//READ
Pokemon.find({nombre:"Squirtle"})
        .then(resultado=>{
            console.log(resultado)
        })
        .catch(err=>console.log(err))

/*Pokemon.findOne()
        .then(resultado=>{
            console.log(resultado)
        })
        .catch(err=>console.log(err))*/


// actualizar()

//UPDATE
async function actualizar(){
    try{
        // Condicion, cambio
        await Pokemon.findOneAndUpdate({nombre:"Squirtle"}, {descripcion: "Vamo a calmarno"})
        let pok = await Pokemon.findOne({nombre: "Charmander"})
        console.log(pok)
    }catch(err){
        console.log(err)
    }
}

// DELETE 
const eliminar = async ()=>{
    await Pokemon.findByIdAndRemove("61678dd182bb0fd94135773a")
    console.log("Pokemon eliminado")
    let pok = await Pokemon.find()
    console.log(pok)
}

eliminar()