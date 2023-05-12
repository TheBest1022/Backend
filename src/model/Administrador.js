import conexion from "../config/database.js";

export const nameAdministrador = async (user) => {
  return await conexion.query(
    `Select usuario.Id, usuario.Usuario, usuario.Contraseña, usuario.IdRol, usuario.id_empresa
        from usuario
        where usuario.Usuario = ?`,
    [user]
  );
};

export const selectAllUserForCompany = async (id) => {
  return await conexion.query(
    `
  select usuario.Id as id, usuario.Usuario as usuario, rol.Rol as rol, empresa.nombre as institucion
  from usuario inner join rol on rol.Id = usuario.IdRol
               inner join empresa on empresa.id = usuario.id_empresa
  where empresa.id = ?
  `,
    [id]
  );
};
