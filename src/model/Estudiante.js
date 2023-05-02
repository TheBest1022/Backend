import conexion from "../config/database.js";

export const selectStudents = async () => {
  return await conexion.query(
    `select Id as id, Nombre_niño as name, Iduser as user from apoderado`
  );
};

export const selectStudentsForCompany = async (id) => {
  return await conexion.query(
    `select apoderado.Id as id, apoderado.Nombre_niño as name, apoderado.Iduser as user, usuario.id_empresa
    from apoderado inner join usuario on apoderado.Iduser = usuario.Id
    where usuario.id_empresa = ?`,[id]
  );
};

