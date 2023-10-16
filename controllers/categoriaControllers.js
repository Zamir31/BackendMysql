const Categoria = require('../models/categoria');

exports.crearCategoria = async (req, res) => {

    try {
        let {NOMBRE_CATEG, ACTIVO} = req.body;
        let categoria = new Categoria(NOMBRE_CATEG, ACTIVO);
        categoria = await categoria.save();
        console.log(categoria);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};


exports.obtenerCategorias = async (req, res) => {

    try {

        const categoria = await Categoria.findAll();

        res.status(200).json({categoria});

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.actualizarCategoria = async (req, res) => {
    try {
        let categoriaId = req.params.id;
        let {NOMBRE_CATEG, ACTIVO} = req.body;

        let categoria = {
            NOMBRE_CATEG : NOMBRE_CATEG,
            ACTIVO : ACTIVO,
        }

        const categoria1 = await Categoria.updateById(categoriaId, categoria);

        console.log(categoria1);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.obtenerCategoria = async (req, res) => {

    try {
        let categoriaId = req.params.id;

        let [categoria, _] = await Categoria.findById(categoriaId);

        res.status(200).json({categoria});
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.deletearCategoria = async (req, res) => {
    try {
        let categoriaId = req.params.id;

        const categoria = await Categoria.deleteById(categoriaId);
        console.log(categoria);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};