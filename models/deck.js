const mongoose = require("mongoose")

const DeckSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numero:{
        type: Number
    },
    color: {
        type: String
    },
    palo: {
        type: String
    }
}, {collection: 'deck'})

module.exports = mongoose.model('deck', DeckSchema)