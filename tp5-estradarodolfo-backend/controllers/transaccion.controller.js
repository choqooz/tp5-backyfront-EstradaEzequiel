const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}
transaccionCtrl.createTransaccion = async (req, res) => {
    console.log(req.body)
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(201).json({
            'status': '1',
            'msg': 'Transaccion guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.',
            'error': console.log(error)
        })
    }
}
transaccionCtrl.getTransaccion = async (req, res) => {
    const transaccion = await Transaccion.findById(req.params.id);
    res.json(transaccion);
}
transaccionCtrl.getTransaccionByEmail = async (req, res) => {
    const transaccion = await Transaccion.findOne({ emailCliente: req.params.emailCliente });
    res.json(transaccion);
}
transaccionCtrl.getTransaccionesPorDivisas = async (req, res) => {
    const { monedaOrigen, monedaDestino } = req.query;
  
    try {
      const transacciones = await Transaccion.find({
        monedaOrigen: monedaOrigen,
        monedaDestino: monedaDestino
      });
  
      if (transacciones.length === 0) {
        return res.status(404).json({
          status: '0',
          msg: 'No se encontraron transacciones para las divisas especificadas.'
        });
      }
  
      res.status(200).json(transacciones);
    } catch (error) {
      res.status(500).json({
        status: '0',
        msg: 'Error procesando la operación',
        error: error.message
      });
    }
  };
transaccionCtrl.editTransaccion = async (req, res) => {
    const transaccion = new Transaccion(req.body);
    try {
        await Transaccion.updateOne({ _id: req.body._id }, transaccion);
        res.json({
            'status': '1',
            'msg': 'Transaccion updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
transaccionCtrl.deleteTransaccion = async (req, res) => {
    try {
        await Transaccion.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Transaccion removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = transaccionCtrl;