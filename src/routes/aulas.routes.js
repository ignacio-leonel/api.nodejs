const express = require('express')
const router = express.Router()
const aulasController = require('../controllers/aulas.controller')

router.get('/', aulasController.getAllAulas)
router.get('/:id', aulasController.getAulasById)

module.exports = { router }