//Importa
const express = require('express');
const bodyParser = require('body-parser');

//Cria a aplicação chamando a função:
const app = express();

//Para a aplicação comerça a escultar
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Criar uma rota so pra ver
//req = dados da requisição, como parametro, t aletenticação
//res = objeto pra envia alguma resposta para o usario

/*app.get('/', (req, res) => {
  res.send('OK');
}); 
*/

//Referencia o caminho do controller
require('./controllers/authController')(app);

app.listen(3000);