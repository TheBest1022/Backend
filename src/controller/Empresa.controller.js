import { insertCompany, selectCompany, updateCompany, selectCompanyForId} from "../model/Empresa.js";

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

export const createCompany = async (req, res) => {
  const { nombre, distrito, provincia, departamento } = req.body;

  if (!nombre || !distrito || !provincia || !departamento) {
    return res.status(200).json({
      status: "error",
      message: "CAMPOS VACIOS",
    });
  }

  try {
    const [data] = await selectCompany();

    let isExist = data.filter((item) => nombre === item.nombre);

    if (isExist.length == 0) {
      await insertCompany(req.body);
      return res.status(201).json({
        status: "success",
        message: "REGISTRADO",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const updateCompanyId = async (req, res) => {
  const {Nombre, Distrito, Provincia, Departamento } = req.body;
  if (!Nombre || !Distrito || !Provincia || !Departamento) {
    return res.status(200).json({
      status: "error",
      message: "CAMPOS VACIOS",
    });
  }
  try {
    await updateCompany(req.body);
    return res.status(201).json({
      status: "success",
      message: "ACTUALIZADO",
    });
  }catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const getUserCompanyId = async (req, res) => {
  try {
    const [data] = await selectCompanyForId(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", message: "ERROR DE SERVIDOR" });
  }

}
