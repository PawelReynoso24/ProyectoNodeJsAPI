'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class transacciones extends Model {
        static associate(models) {
            // define association here
        }
    };
    transacciones.init({
        idEstacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidadVendida: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        precioGalon: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tipoPago: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descuento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        empleado: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'transacciones',
    });
    return transacciones
};