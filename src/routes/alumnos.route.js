const express = require('express')
const alumnosController = require('../controllers/alumnos.controller')

const router = express.Router()

router.get('/', alumnosController.getAllAlumnos)
router.get('/:dni', alumnosController.getAlumnoByDni)
router.delete('/:dni', alumnosController.deleteAlumnoByDni)

module.exports = { router}

