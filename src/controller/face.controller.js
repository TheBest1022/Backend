import { getFaceId, addTime } from "../model/Face.js";

export const obtenerFaceId = async (req, res) => {
  try {
    const [data] = await getFaceId(req.params.id);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const createNewTime = async (req, res) => {
  const { apoderado, face, time } = req.body;
  if (!apoderado || !face || !time) {
    return res.status(200).json({
      status: "error",
      message: "Campos Vacíos",
    });
  }
  try {
    await addTime(req.body);
    return res.status(201).json({
      status: "sucess",
      message: "Tiempo Registrado",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};
