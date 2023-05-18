import conexion from "../config/database.js";

export const loginUser = async (user) => {
    return await conexion.query(
      "select * from usuario where Usuario = ? ",
      [user]
    );
  };
export const loginUserForId = async (user) => {
    return await conexion.query(
      "select * from usuario where Id = ? ",
      [user]
    );
  };