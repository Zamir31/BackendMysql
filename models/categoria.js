const db = require ('../config/db');

class Categoria {
    constructor(NOMBRE_CATEG, ACTIVO) {
        this.NOMBRE_CATEG = NOMBRE_CATEG;
        this.ACTIVO = ACTIVO;
    }

    save(){
        let sql = `insert into TBL_CATEGORIAS (NOMBRE_CATEG, ACTIVO) 
        values ('${this.NOMBRE_CATEG}', ${this.ACTIVO})`;

        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM TBL_CATEGORIAS;";

        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM TBL_CATEGORIAS WHERE ID_CATEGORIA = ${id}`;

        return db.execute(sql);
    }

    static updateById(id, categoria){
        let sql = `update TBL_CATEGORIAS set 
        NOMBRE_CATEG = '${categoria.NOMBRE_CATEG}',
        ACTIVO = ${categoria.ACTIVO} where ID_CATEGORIA = ${id}`;

        return db.execute(sql);
    }

    static deleteById(id){
        let sql = `delete from TBL_CATEGORIAS where ID_CATEGORIA = ${id}`;

        return db.execute(sql);
    }
}

module.exports = Categoria;