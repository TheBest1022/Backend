import conexion from "../config/database.js";

export const nameAdministrador = async (user) => {
    return await conexion.query(
      `Select usuario.Id, usuario.Usuario, usuario.Contraseña, usuario.IdRol, usuario.id_empresa
        from usuario
        where usuario.Usuario = ?`,[user]
    );
  };