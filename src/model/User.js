import conexion from "../config/database.js";


export const newUser = async (data, password) => {
  return await conexion.query(
    "insert into usuario (Usuario, Contraseña, IdRol, id_empresa) values (?,?,?,?)",
    [data.usuario, password, data.rol, data.empresa]
  );
};

export const selectLastId = async () => {
  return await conexion.query(
    "Select max(Id) as id from usuario"
  )
}

export const selectLastIdCurso = async () => {
  return await conexion.query(
    "Select max(Id) as id from docente"
  )
}



