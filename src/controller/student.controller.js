import { selectStudents, selectStudentsForCompany } from "../model/Estudiante.js";
import { insertAssistence } from "../model/Asistencia.js";

export const getStudent = async (req, res) => {
  try {
    const [data] = await selectStudents();
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};
export const getStudentForCompany = async (req, res) => {
  try {
    const [data] = await selectStudentsForCompany(req.params.empresa);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const createAssistence = async (req, res) => {
  const { estudiante, docente, usuario } = req.body;
  if (!docente || !usuario) {
    return res.status(200).json({
      status: "error",
      message: "NO SE PUEDE ENVIAR UNA ASISTENCIA VACIA",
    });
  }
  try {
    estudiante.map(async ({ id, estado }) => {
      await insertAssistence(id, req.body, estado);
    });
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
