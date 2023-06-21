import conexion from "../config/database.js";

export const newPsicologo = async (data, id) => {
  return await conexion.query(
    `
        insert into psicologo (documento, Nombre, Apellido, iduser) values (?,?,?,?)
        `,
    [data.documento, data.Nombre, data.Apellido, id]
  );
};
export const selectPsicologoForId = async (id) => {
  return await conexion.query(
    `select usuario.Id as id_usuario, usuario.Usuario as username, usuario.idRol as rol, usuario.id_empresa, psicologo.documento, psicologo.Nombre
        psicologo.Apellido, psicologo.id as id_psicologo
        from usuario
        inner join psicologo on usuario.Id = psicologo.iduser
        where usuario.Id = ?`,
    [id]
  );
};
export const updatePsicologo = async (data) => {
  return await conexion.query(
    `UPDATE psicologo set Nombre = ?, Apellido = ?
        where Id = ?
        `,
    [data.Nombre, data.Apellido, data.id_docente]
  );
};
export const namePsicologo = async (user) => {
  return await conexion.query(
    `Select psicologo.id, usuario.Usuario, usuario.Contraseña, usuario.IdRol, usuario.id_empresa
          from usuario
          inner join psicologo on usuario.id = psicologo.iduser
          where usuario.Usuario = ?`,
    [user]
  );
};
//DATOS-PSICOLOGO
export const selectPsicoFroCompany = async (id) => {
  return await conexion.query(
    `select psicologo.id as id, psicologo.Nombre as name, psicologo.iduser as user, usuario.id_empresa
    from psicologo inner join usuario on psicologo.iduser = usuario.Id
    where usuario.id_empresa = ?`,
    [id]
  );
};
//RIAS
export const newRegisterRias = async (data) => {
  return await conexion.query(
    `insert into  rias (Idapoderado, Nombre, idempresa, sexo, nivel, fecha_evaluación, fecha_nac, adivinanza, categorias, 
            analogias,figuras, verbal, no_verbal, ad, an, ca, fi, mv, mnv, TotalRv, TotalNRv, Total, Memoria, Indice_Verbal, 
            Indice_No_Verbal, Indice_General, Indice_Memoria) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        `,
    [
      data.apoderado,
      data.nombre,
      data.empresa,
      data.sexo,
      data.nivel,
      data.fechaEval,
      data.fechaNac,
      data.adivinanza,
      data.categorias,
      data.analogias,
      data.figuras,
      data.verbal,
      data.no_verbal,
      data.ad,
      data.an,
      data.ca,
      data.fi,
      data.mv,
      data.mvn,
      data.TotalRv,
      data.TotalNRv,
      data.Total,
      data.Memoria,
      data.Indiceverbal,
      data.IndiceNoverbal,
      data.IndiceGeneral,
      data.IndiceMemoria,
    ]
  );
};
export const selectAlStudentForCompany = async (id) => {
  return await conexion.query(
    `select usuario.Id as id, usuario.Usuario as usuario, apoderado.Nombre_Niño as apoderado, empresa.nombre as institucion, rias.Total, rias.fecha_evaluación, usuario.estado
  from usuario 
  inner join rol on rol.Id = usuario.IdRol
  inner join empresa on empresa.id = usuario.id_empresa
  inner join apoderado on apoderado.Iduser = Usuario.Id
  inner join rias on rias.Idapoderado = apoderado.id
  where empresa.id = ?`,
    [id]
  );
};

export const selectAllStudent = async () => {
  return await conexion.query(
    `select usuario.Id as id, usuario.Usuario as usuario, apoderado.Nombre_Niño as apoderado, empresa.nombre as institucion, rias.Total, rias.fecha_evaluación, usuario.estado
  from usuario 
  inner join rol on rol.Id = usuario.IdRol
  inner join empresa on empresa.id = usuario.id_empresa
  inner join apoderado on apoderado.Iduser = Usuario.Id
  inner join rias on rias.Idapoderado = apoderado.id`
  );
};
