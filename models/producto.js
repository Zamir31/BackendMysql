class producto {
    constructor(nombre_producto, caracteristicas_producto, url_imagen) {
        this.nombre_producto = nombre_producto;
        this.caracteristicas_producto = caracteristicas_producto;
        this.url_imagen = url_imagen;
    }

    save(){

    }

    static findAll() {
        let sql = "SELECT * FROM tbl_productos;";

        return db.execute(sql);
    }
}