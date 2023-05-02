import { selectCompany } from "../model/Empresa.js";

export const getEmpresa = async (req, res) => {
  try {
    const [data] = await selectCompany();
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};
