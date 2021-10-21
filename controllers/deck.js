const Deck = require("../models/deck")

exports.postAgregarCarta = async(req,res)=>{
    const carta = new Deck(req.body);
    /*if (Deck.findOne({numero: req.body.numero,
        color: req.body.color,
        palo: req.body.palo}) != []){
            console.log("La carta ya existe")
        }else{*/
        try{
            await carta.save()
            console.log(carta)
            res.json({"estado": "carta agregada"})
        }catch(err){
            console.log(err)     
    }
}

exports.getMostrarBaraja = async(req,res)=>{
    try{
        let deck = await Deck.find()
        res.json(deck)
    } catch (err){
        console.log(err)
    }
}