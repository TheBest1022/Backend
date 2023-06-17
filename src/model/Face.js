import conexion from "../config/database.js";

export const getFaceId = async (id) => {
  return await conexion.query(
    `select face.id, face.Imagen, face.Descripcion, face.Sonido
      from face`,
    [id]
  );
};

export const addTime = async (data) => {
  return await conexion.query(
    `insert into score (id_apoderado, id_face, time) values (?,?,?)`,
    [data.apoderado, data.face, data.time]
  );
};
