import conexion from "../config/database.js";

export const insertAssistence = async (id, data, estado) => {
  return await conexion.query(
    `insert into asistencia (id_estudiante,id_docente,id_usuario, estado, id_empresa) values (?,?,?,?,?)`,
    [id, data.docente, data.usuario, estado, data.empresa]
  );
};

//Traer reporte de asistencia
export const selectAssistence = async (id) => {
  return await conexion.query(
    `SELECT a.id AS id, d.Nombre AS docente, ap.Nombre_Niño AS estudiante, c.Descripción AS curso, a.estado AS estado, a.fecha AS fecha, c.id AS id_curso, d.Id AS id_docente, 
    ap.Id AS id_estudiante, em.nombre AS empresa
    FROM asistencia a 
      INNER JOIN docente d ON a.id_docente = d.Id
      INNER JOIN apoderado ap ON a.id_estudiante = ap.Id
      INNER JOIN curso c ON d.Id = c.Id
      INNER JOIN empresa em ON a.id_empresa = em.id
      where em.id = ?
      GROUP BY a.id`,[id]
  );
};
