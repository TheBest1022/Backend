import conexion from "../config/database.js";

export const createCourse = async (docente,curso)=>{
    return conexion.query(`
    insert into dt_curso_docente(id_docente,id_curso) values (?,?)
    `, [docente, curso.id])
}