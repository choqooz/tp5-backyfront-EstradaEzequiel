const espectadorCtrl = require('./../controllers/espectador.controller');
const express = require('express');
const router = express.Router();

router.get('/:id', espectadorCtrl.getEspectador);
router.get('/', espectadorCtrl.getEspectadores);
router.post('/', espectadorCtrl.createEspectador);

module.exports = router;