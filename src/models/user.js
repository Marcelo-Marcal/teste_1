//Importa
const mongoose = require('../database');

//Os campos que vai ter no nosso banco de dados
const UserSchema = new mongoose.Schema({
  name: {
    type: String, /*tipo letras*/
    require: true, /*obrigatorio*/    
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true, /*unica*/
    required: true, /*obrigatorio*/
    lowercase: true, /*força pra ser formato caixa baixa*/   
  },
  password: {
    type: String,
    required: true,
    select: false, /*P informação da senha não venha no arrya*/
  },
  createdAt: { /*Anotar a data que o registro foi criado*/
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

//Exporta o usuaria
module.exports = User;