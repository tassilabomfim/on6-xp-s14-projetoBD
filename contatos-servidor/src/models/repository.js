const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/Contato'

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true})
    const connection = mongoose.connection

    connection.on('error', () => console.error('Erro ao se conectar'))
    connection.once('open', () => console.log('Conectamos no Mongo'))
}

module.exports = { connect }

//arquivo Repository cria a conexão com nosso banco de dados, nesse caso o MongoDB
