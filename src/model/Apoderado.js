import conexion from "../config/database.js";

export const addApoderado = async (data, user) => {
    return await conexion.query(
      "insert into apoderado (documento, Nombre_Niño, Nombre_Apoderado, Iduser) values (?,?,?,?)",
      [data.document,data.niño, data.Apoderado, user]
    );
  };

  export const nameUsuario = async (user) => {
    return await conexion.query(
      `Select apoderado.documento, apoderado.Nombre_Niño, usuario.IdRol, usuario.id_empresa
      from usuario
      inner join apoderado on usuario.id = apoderado.iduser
      where usuario.usuario = ?`,[user]
    )
  }

  export const nameDocente = async (user) => {
    try {
      const [results] = await conexion.query(
        `select usuario.Id, usuario.IdRol, docente.Nombre, docente.Apellido, docente.Id as idDocente, curso.Descripción, curso.id as idCurso, usuario.id_empresa
    from dt_curso_docente dt inner join docente on dt.id_docente = docente.Id
                             inner join curso on dt.id_curso = curso.Id
                             inner join usuario on usuario.Id = docente.IdUsuario
        where usuario.usuario = ?`,[user]
      );
      console.log("Results from nameDocente:", results); // Añadir un registro para depurar los resultados
      return results;
    } catch (error) {
      console.error("Error in nameDocente:", error);
      throw error;
    }
  };