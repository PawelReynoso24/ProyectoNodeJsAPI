'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('transacciones', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            idEstacion: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            cantidadVendida: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false
            },
            precioGalon: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false
            },
            idCliente: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            fecha: {
                type: Sequelize.DATE,
                allowNull: false
            },
            tipoPago: {
                type: Sequelize.STRING,
                allowNull: false
            },
            descuento: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            empleado: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            }, //este no se cambia
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }, //estos no se cambian
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('transacciones');
    }
};