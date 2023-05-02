import { dataConfig } from "./configuracion.js";
import mysql from "mysql2/promise";

const conexion = mysql.createPool(dataConfig);

conexion.getConnection((err, connection) => {
  if (err) {
    console.log("DB:: connection error");
  }
  if (connection) {
    connection.release();
    console.log("DB:: succes connection");
  }
  return;
});

export default conexion;
