import {
  selectTeachForId,
  updateUserTeach,
  selectDirectorForId,
  deleteUser,
} from "../model/User.js";
import { loginUserForId } from "../model/Auth.js";
import { updateDirector } from "../model/Administrador.js";
import { updateDocente } from "../model/Docente.js";

export const getUserForId = async (req, res) => {
  try {
    const [data] = await loginUserForId(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", message: "ERROR DE SERVIDOR" });
  }
};
export const getUserTeachForId = async (req, res) => {
  try {
    const [data] = await selectTeachForId(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", message: "ERROR DE SERVIDOR" });
  }
};

export const updateUserTeachForId = async (req, res) => {
  const { Nombre, Apellido, rol, empresa, id_docente, id_usuario } = req.body;
  if (!Nombre || !Apellido || !rol || !empresa || !id_docente || !id_usuario) {
    console.log(req.body);
    return res.status(200).json({
      status: "error",
      message: "DATOS VACIOS",
    });
  }

  try {
    await updateUserTeach(req.body);
    await updateDocente(req.body);
    return res.status(201).json({
      status: "success",
      message: "ACTUALIZADO",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};
export const getUserDirectorForId = async (req, res) => {
  try {
    const [data] = await selectDirectorForId(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", message: "ERROR DE SERVIDOR" });
  }
};

export const updateUserDirectorForId = async (req, res) => {
  const { Nombre, Apellido, rol, empresa, id_docente, id_usuario } = req.body;
  if (!Nombre || !Apellido || !rol || !empresa || !id_docente || !id_usuario) {
    console.log(req.body);
    return res.status(200).json({
      status: "error",
      message: "DATOS VACIOS",
    });
  }

  try {
    await updateUserTeach(req.body);
    await updateDirector(req.body);
    return res.status(201).json({
      status: "success",
      message: "ACTUALIZADO",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const disabledUser = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    return res.status(201).json({
      status: "success",
      message: "ELIMINADO",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};
