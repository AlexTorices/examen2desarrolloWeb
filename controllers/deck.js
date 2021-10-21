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

exports.getMostrarBaraja = async(req,res)=>{
    try{
        let deck = await Deck.find()
        console.log(deck)
    } catch (err){
        console.log(err)
    }
}