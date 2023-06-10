const transaccionCtrl = require('./../controllers/transaccion.controller');
const express = require('express');
const router = express.Router();

router.get('/divisas', transaccionCtrl.getTransaccionesPorDivisas);
router.get('/:emailCliente', transaccionCtrl.getTransaccionByEmail);
router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.put('/:id', transaccionCtrl.editTransaccion);
router.delete('/:id', transaccionCtrl.deleteTransaccion);


module.exports = router;