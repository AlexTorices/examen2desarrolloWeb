const mongoose = require("mongoose")

const DeckSchema = mongoose.Schema({
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