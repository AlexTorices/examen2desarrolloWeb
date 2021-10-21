const Deck = require("../models/deck")

exports.postAgregarCarta = async(req,res)=>{
    const carta = new Deck(req.body);
    const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    const palosB = ["spades", "clubs"]
    const palosR = ["hearts", "diamonds"]

    const valido = numeros.includes(req.body.numero) && (
        (palosB.includes(req.body.palo) && ("B" == req.body.color)) || 
        (palosR.includes(req.body.palo) && ("R" == req.body.color)))

    if (!valido){
        res.json({"estado": "datos invalidos"})
        console.log("datos invalidos")
    } else {
        let deckExist = await Deck.find({numero: req.body.numero, color: req.body.color, palo: req.body.palo})
        if (deckExist.length != 0){
            console.log("La carta ya existe")
            res.json({"estado":"carta ya existente"})
        }else{
            try{
                await carta.save()
                console.log(carta)
                //res.json({"estado": "carta agregada"})
                res.send("exito")
            }catch(err){
                res.send(err)
                console.log(err)     
            }
        }
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


const eliminar = async ()=>{
    await Deck.findByIdAndRemove("6170e520b1e2dcfce3b8799d")
    console.log("Pokemon eliminado")
}

