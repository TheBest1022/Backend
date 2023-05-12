import conexion from "../config/database.js";

export const createCourse = async (docente, id) => {
  return conexion.query(
    `
    insert into dt_curso_docente(id_docente,id_curso) values (?,?)
    `,
    [docente, id]
  );
};

export const selectCourse = async (id) => {
  return conexion.query(
    `
    select curso.Descripción as curso, curso.Id, docente.Id as id_docente
    from curso inner join dt_curso_docente dt on dt.id_curso = curso.Id
               inner join docente on docente.Id = dt.id_docente
    where dt.id_docente = ?
    `,
    [id]
  );
};
