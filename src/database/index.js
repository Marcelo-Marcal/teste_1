//Definindo uma costante
const mongoose = require('mongoose');

//Conectar ao banco de dados
mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });

//Qual a classe promess que o mongoose vai utilizar
mongoose.Promise = global.Promise;

module.exports = mongoose; 