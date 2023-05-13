import conexion from "../config/database.js";

export const selectIDdocente = async () => {
  return await conexion.query("Select max(Id) as id from docente");
};

export const addDocente = async (data, id) => {
  return await conexion.query(
    "insert into docente (documento, Nombre, Apellido, IdUsuario) values (?,?,?,?)",
    [data.documento, data.Nombre, data.Apellido, id]
  );
};

export const selectAllDocente = async () => {
  return await conexion.query(
    `select usuario.Id, usuario.IdRol, docente.Nombre,docente.documento, docente.Apellido, docente.Id as idDocente, curso.Descripción, curso.id as idCurso, usuario.id_empresa
    from dt_curso_docente dt inner join docente on dt.id_docente = docente.Id
                             inner join curso on dt.id_curso = curso.Id
                             inner join usuario on usuario.Id = docente.IdUsuario`
  );
};
export const nameDocente = async (id) => {
  return await conexion.query(
    `select usuario.Id, usuario.IdRol, docente.Nombre,docente.documento, docente.Apellido, docente.Id as idDocente, curso.Descripción, curso.id as idCurso, usuario.id_empresa
    from dt_curso_docente dt inner join docente on dt.id_docente = docente.Id
                             inner join curso on dt.id_curso = curso.Id
                             inner join usuario on usuario.Id = docente.IdUsuario
    where usuario.id_empresa = ?`,
    [id]
  );
};

export const getDocente = async (id) => {
  return await conexion.query(
    `Select docente.Nombre, docente.Apellido, usuario.Id, docente.Id
      from usuario
      inner join docente on usuario.id = docente.idUsuario
      where docente.Id = ?`,
    [id]
  );
};

export const updateDocente = async (data) => {
  return await conexion.query(
    `UPDATE docente set Nombre_Docente = ?, Apellido_Docente = ?
    where Id = ?`,
    [data.Nombre_Docente, data.Apellido_Docente, data.idDocente]
  );
};

export const addTema = async (data) => {
  return await conexion.query(
    "insert into tema (Descripcion, idCurso) values (?,?)",
    [data.Descripcion, data.idCurso]
  );
};

export const getTemaId = async (id) => {
  return await conexion.query(
    `select tema.Descripcion, tema.idCurso, tema.idTema, tema.Pdf, tema.Imagen, tema.Sonido
    from tema 
    inner join curso on curso.id = tema.idCurso
    where tema.idCurso = ?`,
    [id]
  );
};

export const deteleTema = async (id) => {
  return await conexion.query(`delete from tema where idTema = ?`, [id]);
};

export const updatePdf = async (data) => {
  return await conexion.query(`UPDATE tema set Pdf = ? where idTema = ?`, [
    data.Pdf,
    data.idTema,
  ]);
};

export const sendMensaje = async (data) => {
  return await conexion.query(
    "insert into mensaje (Mensaje, idCurso) values (?,?)",
    [data.Mensaje, data.idCurso]
  );
};

export const obtenerMessage = async (id) => {
  return await conexion.query(
    `Select mensaje.Id as id, mensaje.Mensaje as Mensaje, curso.id as curso, mensaje.Estado
      from mensaje
      inner join curso on mensaje.idCurso = curso.id
      where mensaje.idCurso = ?`,
    [id]
  );
};

export const addCurso = async (id, data) => {
  return await conexion.query(
    `UPDATE curso set idDocente = ?
    where Id = ?`,
    [id, data]
  );
};

export const updateMessage = async (Id) => {
  return await conexion.query(`UPDATE mensaje set Estado = 1 where Id = ?`, [
    Id,
  ]);
};
