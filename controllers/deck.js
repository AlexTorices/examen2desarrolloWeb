const Deck = require("../models/deck")

exports.postAgregarCarta = async(req,res)=>{
    const carta = new Deck(req.body);
    try{
        await carta.save()
        console.log(carta)
        console.log("Carta agregada")
    }catch(err){
        console.log(err)
    }
}

