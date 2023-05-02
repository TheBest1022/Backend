import conexion from "../config/database.js";

export const selectCompany = async () => {
  return await conexion.query(`
    select id, nombre from empresa
    `);
};
