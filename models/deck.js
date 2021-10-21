const mongoose = require("mongoose")

const DeckSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numero:{
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    palo: {
        type: String,
        required: true
    }
}, {collection: 'deck'})

module.exports = mongoose.model('deck', DeckSchema)