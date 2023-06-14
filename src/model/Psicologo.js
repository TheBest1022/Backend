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

//RIAS

export const newRegisterRias = async (data) => {
  return await conexion.query(
    `insert into  rias (idapoderado, Nombre, idempresa, sexo, nivel, fecha_evaluación, fecha_nac, adivinanza, categorias, 
            analogias,figuras, verbal, no_verbal, ad, an, ca, fi, mv, mnv, TotalRv, TotalNRv, Total, Memoria, Indice_Verbal, 
            Indice_No_Verbal, Indice_General, Indice_Memoria) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        `,
    [
      data.idapoderado,
      data.Nombre,
      data.idempresa,
      data.sexo,
      data.nivel,
      data.fecha_evaluación,
      data.fecha_nac,
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
      Total,
      Memoria,
      Indice_Verbal,
      Indice_No_Verbal,
      Indice_General,
      Indice_Memoria,
    ]
  );
};
