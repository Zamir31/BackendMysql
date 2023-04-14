const Producto = require('../models/producto')

exports.crearProducto = async (req, res) => {

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};


exports.obtenerProductos = async (req, res) => {

    try {

        const producto1 = await Producto.findAll();

        res.status(200).json({producto1});

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.actualizarProducto = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.obtenerProducto = async (req, res) => {

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.deletearProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ message: "Producto no existe" });
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ message: "Producto eliminado"});
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};