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

export const selectThemeForCourse = async (docente, curso) => {
  return conexion.query(
    `
    select tema.Descripcion, tema.idCurso, tema.idTema, tema.Pdf, tema.Imagen, tema.Sonido, docente.Id, curso.Descripción as curso
    from dt_curso_docente dt inner join curso on curso.Id = dt.id_curso
                             inner join docente on docente.Id = dt.id_docente
                             inner join tema on tema.idCurso = curso.Id
    where docente.Id = ? and curso.Id = ?
    `,
    [docente, curso]
  );
};
