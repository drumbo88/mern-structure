const express = require('express');
const cAlgo = require('../controllers/algo.controller');
const router = express.Router();

// Importar modelos

// Importar controladores

// Definición de rutas 
router.route('/')
    .get(cAlgo.algoLista)

// Export
module.exports = router