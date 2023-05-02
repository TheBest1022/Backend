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
    `select a.id as id, d.Nombre_Docente as docente, ap.Nombre_Niño as estudiante, c.Descripción as curso, a.estado as estado, a.fecha as fecha, c.id as id_curso, d.Id as id_docente, ap.Id as id_estudiante, em.nombre as empresa
    from asistencia a inner join docente d on a.id_docente = d.Id
                    inner join apoderado ap on a.id_estudiante=ap.Id
                    inner join curso c on d.Id = c.idDocente
                    inner join empresa em on a.id_empresa = em.id
    where em.id = ?
    GROUP BY a.id`, [id]
  );
};
