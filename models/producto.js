const db = require ('../config/db');

class Producto {
    constructor(nombre_producto, caracteristicas_producto, url_imagen, ACTIVO, id_categoria) {
        this.nombre_producto = nombre_producto;
        this.caracteristicas_producto = caracteristicas_producto;
        this.url_imagen = url_imagen;
        this.ACTIVO = ACTIVO;
        this.id_categoria = id_categoria;
    }

    save(){
        let sql = `insert into tbl_productos (nombre_producto, caracteristicas_producto, url_imagen, ACTIVO, id_categoria) 
        values ('${this.nombre_producto}', '${this.caracteristicas_producto}', '${this.url_imagen}', ${this.ACTIVO}, ${this.id_categoria})`;

        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM tbl_productos;";

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM tbl_productos WHERE id_producto = ${id}`;

        return db.execute(sql);
    }

    static updateById(id, producto){
        let sql = `update tbl_productos set 
        nombre_producto = '${producto.nombre_producto}',
        caracteristicas_producto = '${producto.caracteristicas_producto}', 
        url_imagen = '${producto.url_imagen}',
        ACTIVO = ${producto.ACTIVO},
        id_categoria = ${producto.id_categoria} where id_producto = ${id}`;

        return db.execute(sql);
    }

    static deleteById(id){
        let sql = `delete from tbl_productos where id_producto = ${id}`;

        return db.execute(sql);
    }
}

module.exports = Producto;