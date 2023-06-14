import conexion from "../config/database.js";

export const getFaceId = async (id) => {
    return await conexion.query(
      `select face.id, face.Imagen, face.Descripcion, face.Sonido
      from face`, [id]
    );
  };