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
        `Select docente.documento, docente.Nombre_Docente, usuario.IdRol, curso.idDocente, curso.id as curso, usuario.Id as usuario, usuario.id_empresa
        from usuario
        inner join docente on usuario.id = docente.IdUsuario
        inner join curso on curso.idDocente = docente.Id
        where usuario.usuario = ?`,[user]
      );
      console.log("Results from nameDocente:", results); // Añadir un registro para depurar los resultados
      return results;
    } catch (error) {
      console.error("Error in nameDocente:", error);
      throw error;
    }
  };