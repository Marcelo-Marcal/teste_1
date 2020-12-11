//importa rotas
const express = require('express');

//importa ações de logn e cadastro
const User = require('../models/user');

const router = express.Router();

//Rota de cadastro
router.post('/register', async (req, res) => {

  try {
    const user = await User.create(req.body); /*todos os parametro*/

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' });
  }

});

module.exports = app => app.use('/auth', router);