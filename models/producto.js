const db = require ('../config/db');

class Producto {
    constructor(nombre_producto, caracteristicas_producto, url_imagen) {
        this.nombre_producto = nombre_producto;
        this.caracteristicas_producto = caracteristicas_producto;
        this.url_imagen = url_imagen;
    }

    save(){
        let sql = `insert into tbl_productos (nombre_producto, caracteristicas_producto, url_imagen) 
        values ('${this.nombre_producto}', '${this.caracteristicas_producto}', '${this.url_imagen}')`;

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
        url_imagen = '${producto.url_imagen}' where id_producto = ${id}`;

        return db.execute(sql);
    }

    static deleteById(id){
        let sql = `delete from tbl_productos where id_producto = ${id}`;

        return db.execute(sql);
    }
}

module.exports = Producto;