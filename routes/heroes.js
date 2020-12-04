const express = require('express');

const router = express.Router();

const heroesController = require('../controllers/heroesController')

router.get('/', heroesController.heroes)
router.get('/detalle/:idHeroe', heroesController.detalle)
router.get('/bio/:id/:ok?', heroesController.bios)
module.exports = router