const Sequelize = require('sequelize')

  // Conexão com banco de dados
  const sequelize = new Sequelize('test', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})