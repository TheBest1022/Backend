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
