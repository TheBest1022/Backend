import conexion from "../config/database.js";

export const selectCompany = async () => {
  return await conexion.query(`
    select id, nombre, distrito, provincia, departamento, fecha from empresa
    `);
};

export const insertCompany = async (data) => {
  return await conexion.query(`
    insert into empresa(nombre,distrito,provincia,departamento) values(?,?,?,?)
    `, [data.nombre,data.distrito,data.provincia,data.departamento]);
};

export const updateCompany = async (data) => {
  return await conexion.query(
    `
    update empresa set nombre = ? , distrito = ? , provincia = ? , departamento = ? 
    where empresa.id = ?
    `,
    [data.Nombre, data.Distrito, data.Provincia, data.Departamento, data.id]
  );
}

export const selectCompanyForId = async (id) => {
  return await conexion.query(
    `
    select empresa.id as id, empresa.nombre as Nombre, empresa.distrito as Distrito, empresa.provincia as Provincia, empresa.departamento as Departamento
    from empresa
    where empresa.id = ?
    `, [id]
  )
}
