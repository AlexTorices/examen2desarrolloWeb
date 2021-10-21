const router = require("express").Router();
const deckController = require("../controllers/deck")

router.post('/agregarCarta', deckController.postAgregarCarta)

module.exports= router