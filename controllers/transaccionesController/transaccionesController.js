'use strict'
const Sequelize = require('sequelize');
const db = require("../../models");
const TRANSACCION = db.transacciones;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");
const transacciones = require('../../models/transacciones/transacciones');


module.exports = {
    //MOSTRAR DATOS
    async find(req, res) {
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/apiSPTanques/ALLtanques',
            headers: {
                'Content-Type': 'application/json'
            },
        };
    
        try {
            const result = await axios(options);
            
            if (result && result.data) {
                // Si la respuesta contiene datos, envía esos datos en la respuesta de tu API
                res.status(200).json(result.data);
            } else {
                res.status(404).send("No se encontraron datos de tanques");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener los datos de los tanques de gasolina");
        }
    },


    //create
//    async create (req, res) {
//     try {
//             const datos = req.body //Serializar los datos
//             const datos_ingreso = { //Objeto
//                 idEstacion: datos.idEstacion,
//                 cantidadVendida: datos.cantidadVendida,
//                 precioGalon: datos.precioGalon,
//                 idCliente: datos.idCliente,
//                 fecha: datos.fecha,
//                 tipoPago: datos.tipoPago,
//                 descuento: datos.descuento,
//                 empleado: datos.empleado
//             };

//                 // TRANSACCION.create(datos_ingreso)
//                 // .then(transacciones => {
//                 //     res.send(transacciones);
//                 // })
//                 // .catch(error => {
//                 //     console.log(error)
//                 //     return res.status(500).json({ error: 'Error al insertar' });
//                 // });
//         }
//     },

async create(req, res) {
    try {
        const datos = req.body; // Serializar los datos

       // const transacciones = await TRANSACCION.create(datos_ingreso);

        const nivelActualResponse = await axios.get(`http://localhost:8080/apiSPTanques/obtenerNivelTanque/${datos.idEstacion}`);
        const nivelActual = nivelActualResponse.data;

        const nuevoNivel = nivelActual - datos.cantidadVendida;

        const options = {

            method: 'PUT',
            url: 'http://localhost:8080/apiSPTanques/actualizarNivelTanque',
            headers: {
            'Content-Type': 'application/json'
            },

            data: {
                
                request:{
                    nuevo_nivel: nuevoNivel,
                    tanques:{
                        id: datos.idEstacion,
                        nivel_actual: nuevoNivel
                    }
                }
            
            }
        }

        try {
            const result = await axios(options);
            
            if (result && result.data) {
                // Si la respuesta contiene datos, envía esos datos en la respuesta de tu API
                res.status(200).json(result.data);
            } else {
                res.status(404).send("No se encontraron datos de tanques");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener los datos de los tanques de gasolina");
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al insertar o actualizar el nivel del tanque' });
    }
}
   
};