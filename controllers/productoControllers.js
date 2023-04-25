const Producto = require('../models/producto')

exports.crearProducto = async (req, res) => {

    try {
        let {nombre_producto, caracteristicas_producto, url_imagen} = req.body;
        let producto = new Producto(nombre_producto, caracteristicas_producto, url_imagen);
        producto = await producto.save();
        console.log(producto);
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
        let productoId = req.params.id;
        let {nombre_producto, caracteristicas_producto, url_imagen} = req.body;

        let producto = {
            nombre_producto : nombre_producto,
            caracteristicas_producto : caracteristicas_producto,
            url_imagen : url_imagen
        }

        const producto1 = await Producto.updateById(productoId, producto);

        console.log(producto1);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.obtenerProducto = async (req, res) => {

    try {
        let productoId = req.params.id;

        let [producto, _] = await Producto.findById(productoId);

        res.status(200).json({producto});
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.deletearProducto = async (req, res) => {
    try {
        let productoId = req.params.id;

        const producto = await Producto.deleteById(productoId);
        console.log(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};