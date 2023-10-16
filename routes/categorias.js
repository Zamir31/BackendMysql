const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriaControllers')

router.get('/', categoriasController.obtenerCategorias);
router.get('/:id', categoriasController.obtenerCategoria);
router.post('/', categoriasController.crearCategoria);
router.put('/:id', categoriasController.actualizarCategoria);
router.delete('/:id', categoriasController.deletearCategoria);

module.exports = router;