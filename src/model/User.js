import conexion from "../config/database.js";

export const newDirector = async (data, id) => {
  return await conexion.query(
    `
  insert into director (documento, Nombre, Apellido, idUsuario) values (?,?,?,?)
  `,
    [data.documento, data.Nombre, data.Apellido, id]
  );
};

export const newUser = async (data, password) => {
  return await conexion.query(
    "insert into usuario (Usuario, Contraseña, IdRol, id_empresa) values (?,?,?,?)",
    [data.usuario, password, data.rol, data.empresa]
  );
};

export const selectLastId = async () => {
  return await conexion.query("Select max(Id) as id from usuario");
};

export const selectLastIdCurso = async () => {
  return await conexion.query("Select max(Id) as id from docente");
};

export const selectTeachForId = async (id) => {
  return await conexion.query(
    `
  select usuario.Id as id_usuario,usuario.Usuario as username, usuario.IdRol as rol, usuario.id_empresa as empresa, docente.documento, docente.Nombre, docente.Apellido, docente.Id as id_docente
  from usuario inner join docente on usuario.Id = docente.IdUsuario
  where usuario.Id = ?
  `,
    [id]
  );
};

export const updateUserTeach = async (data) => {
  return await conexion.query(
    `
  update usuario set id_empresa = ?, IdRol = ?
  where usuario.id = ?
  `,
    [data.empresa, data.rol, data.id_usuario]
  );
};

export const selectDirectorForId = async (id) => {
  return await conexion.query(
    `
    select usuario.Id as id_usuario,usuario.Usuario as username, usuario.IdRol as rol, usuario.id_empresa as empresa, director.documento, director.Nombre, director.Apellido, director.Id as id_docente
    from usuario inner join director on usuario.Id = director.IdUsuario
    where usuario.Id = ?
  `,
    [id]
  );
};

export const deleteUser = async (id)=>{
  return await conexion.query(`
  update usuario set estado = 0 where Id = ?
  `,[id])
}