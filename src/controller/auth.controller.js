import { passwordEncrypt, passwordVerify } from "../helpers/helpers.js";
import { newUser, selectLastId } from "../model/User.js";
import { addApoderado, nameUsuario, nameDocente } from "../model/Apoderado.js";
import { nameAdministrador } from "../model/Administrador.js";
import { loginUser } from "../model/Auth.js";

//--VALIDACIONES

const validarUser = async (us) => {
  const [user] = await loginUser(us);
  return user.length > 0;
};

const validarPass = async (pass, user) => {
  const Validacion = await passwordVerify(pass.toString(), user);
  return Validacion;
};

export const singIng = async (req, res) => {
  const { us, password } = req.body;
  console.log(req.body);
  if (!us || !password) {
    return res.status(200).json({
      status: "error",
      message: "EXISTEN CAMPOS VACÍOS",
    });
  }
  try {
    const validUser = await validarUser(us);
    if (!validUser) {
      return res.status(200).json({
        status: "error",
        message: "USUARIO INCORRECTO",
      });
    }
    const [user] = await loginUser(us);
    const validarContraseña = await validarPass(password, user[0].Contraseña);
    if (!validarContraseña) {
      return res.status(200).json({
        status: "error",
        message: "CONTRASEÑA INCORRECTA",
      });
    }
    const [data] =
      user[0].IdRol == 1
        ? await nameAdministrador(us)
        : user[0].IdRol == 2
        ? await nameUsuario(us)
        : user[0].IdRol == 6
        ? await nameAdministrador(us)
        : await nameDocente(us);

    console.log(data);
    let getData = user[0].IdRol == 5 ? data : data[0];

    if (!data || data.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No se encontraron datos para el docente",
      });
    }

    return res.status(201).json({
      status: "success",
      message: "INGRESO CON ÉXITO",
      user: getData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const singUp = async (req, res) => {
  const { usuario, contraseña, Apoderado, niño, rol, empresa } = req.body;
  if (!usuario || !contraseña || !Apoderado || !niño || !rol || !empresa) {
    return res.status(200).json({
      status: "error",
      message: "EXISTEN CAMPOS VACÍOS",
    });
  }
  if (contraseña.length != 4) {
    return res.status(200).json({
      status: "error",
      message: "PERMISO DE CONTRASEÑA: 4 NÚMEROS",
    });
  }
  try {
    const passwordnew = await passwordEncrypt(contraseña);
    await newUser(req.body, passwordnew);
    const [id] = await selectLastId();
    setTimeout(async () => {
      if (id.length > 0) {
        await addApoderado(req.body, id[0].id);
        return res.status(201).json({
          status: "success",
          message: "REGISTRADO",
        });
      }
    }, 2000);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const createDirector = async (req, res) => {
  const { usuario, contraseña, rol, empresa } = req.body;
  if (!usuario || !contraseña || !empresa || !rol) {
    return res.status(200).json({
      status: "error",
      message: "EXISTEN CAMPOS VACÍOS",
    });
  }
  if (contraseña.length != 4) {
    return res.status(200).json({
      status: "error",
      message: "PERMISO DE CONTRASEÑA: 4 NÚMEROS",
    });
  }
  try {
    const passwordnew = await passwordEncrypt(contraseña);
    await newUser(req.body, passwordnew);
    return res.status(201).json({
      status: "success",
      message: "REGISTRADO",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};
