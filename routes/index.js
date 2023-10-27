const { Router } = require('express');
const router = Router();

// // facturas
// const facturasController = require('../controllers/cuenta/facturaControler');
// const externalController = require('../controllers/externo/externoController');
// const aeropuertoAPI1Controller = require('../controllers/aeropuertoAPI1/aeropuertoAPI1Controller');
// const serviciosSimplesController = require('../controllers/serviciossimples/serviciossimplesController');
// //RUTAS

module.exports = (app) => {
    // //facturas
    // router.get('/factura/find', facturasController.find);
    // router.post('/contabilidad/create', facturasController.create);

    // router.get('/externo/find/', externalController.find);
    // router.get('/externo/findById/', externalController.findById);
    // // router.get('/externo/update/', externalController.update);
    // // router.get('/externo/delete/', externalController.delete);
    // // router.get('/externo/create/', externalController.create);

    
    // router.post('/api1/ingreso/', aeropuertoAPI1Controller.actualizarVisita);
    // router.post('/api1/servicio/', serviciosSimplesController.actualizarServicio);
    app.use('/', router);

};