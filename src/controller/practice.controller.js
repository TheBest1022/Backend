import { addTimePractice } from "../model/Practice.js";

export const createTimePractice = async (req, res) => {
    const { apoderado, time } = req.body;
    if (!apoderado || !time) {
      return res.status(200).json({
        status: "error",
        message: "Campos Vacíos",
      });
    }
    try {
      await addTimePractice(req.body);
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
}