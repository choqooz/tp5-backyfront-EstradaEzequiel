//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de Sector
router.get('/espectador/tipoEspectador', ticketCtrl.getEspectadoresPorCategoria);
router.get('/', ticketCtrl.getTickets);
router.get('/:id', ticketCtrl.getTicket);
router.post('/', ticketCtrl.createTicket);
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
//exportamos el modulo de rutas
module.exports = router;