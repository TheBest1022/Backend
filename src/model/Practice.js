import conexion from "../config/database.js";

export const addTimePractice = async (data) => {
    return await conexion.query(
      `insert into practice (id_apoderado, time) values (?,?)`,
      [data.apoderado, data.time]
    );
  };