// Importar biblioteca
const Sequelize = require('sequelize'); // Vai receber o sequelize

// Conectar com banco de dados
const database = new Sequelize('SESI','api','Senai115',{
    dialect: 'mysql',
    host:'20.197.230.238',
    port: 30306,
});

// Exportar módulo
module.exports = database;
