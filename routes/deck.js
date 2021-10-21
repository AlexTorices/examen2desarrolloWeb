const router = require("express").Router();
const deckController = require("../controllers/deck")

router.post('/agregarCarta', deckController.postAgregarCarta)
router.get('/mostrarBaraja', deckController.getMostrarBaraja)

module.exports= router