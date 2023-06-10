const Ticket = require('./../models/ticket')
const Espectador = require('./../models/espectador');

ticketCtrl = {};

ticketCtrl.getTickets = async (req,res) =>{
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets)
}
ticketCtrl.getEspectadoresPorCategoria = async (req, res) => {
    const categoria = req.query.categoria; // Obtener la categoría de la consulta
  
    try {
      let tickets;
      if (categoria) {
        // Si se proporciona una categoría, filtrar los tickets por esa categoría
        tickets = await Ticket.find({ categoriaEspectador: categoria }).populate("espectador");
      } else {
        // Si no se proporciona una categoría, obtener todos los tickets sin filtrar
        tickets = await Ticket.find().populate("espectador");
      }
  
      // Obtener los espectadores de los tickets filtrados
      const espectadores = tickets.map(ticket => ticket.espectador);
  
      res.json(espectadores);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error procesando la operacion'
      });
    }
  };
  
ticketCtrl.createTicket = async (req, res) => {
    console.log(req.body)
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(201).json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
ticketCtrl.editTicket = async (req, res) => {
  try {
    const { precioTicket, categoriaEspectador, fechaCompra, espectador } = req.body;
    await Ticket.updateOne({ _id: req.params.id }, { precioTicket, categoriaEspectador, fechaCompra, espectador });
    res.json({
      status: '1',
      msg: 'Ticket updated'
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operacion'
    });
  }
};
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = ticketCtrl;