const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/auth')

// Importar controladores
const cAlgo = require('../controllers/algo.controller');

// Definición de rutas 
router.route('/')
    .get(checkAuth, cAlgo.algoLista)
    .post(checkAuth, cAlgo.algoLista)

// Export
module.exports = router