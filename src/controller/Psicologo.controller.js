import { newRegisterRias, selectPsicoFroCompany } from "../model/Psicologo.js";

export const registerRias = async (req, res) => {
  const {
    apoderado,
    nombre,
    empresa,
    sexo,
    nivel,
    fechaEval,
    fechaNac,
    adivinanza,
    categorias,
    analogias,
    figuras,
    verbal,
    no_verbal,
    ad,
    an,
    ca,
    fi,
    mv,
    mvn,
    TotalRv,
    TotalNRv,
    Total,
    Memoria,
    Indiceverbal,
    IndiceNoverbal,
    IndiceGeneral,
    IndiceMemoria,
  } = req.body;
  if (
    !apoderado ||
    !nombre ||
    !empresa ||
    !sexo ||
    !nivel ||
    !fechaEval ||
    !fechaNac ||
    !adivinanza ||
    !categorias ||
    !analogias ||
    !figuras ||
    !verbal ||
    !no_verbal ||
    !ad ||
    !an ||
    !ca ||
    !fi ||
    !mv ||
    !mvn ||
    !TotalRv ||
    !TotalNRv ||
    !Total ||
    !Memoria ||
    !Indiceverbal ||
    !IndiceNoverbal ||
    !IndiceGeneral ||
    !IndiceMemoria
  ) {
    return res.status(200).json({
      status: "error",
      message: "Existen Campos Vacíos",
    });
  }
  try {
    await newRegisterRias(req.body);
    return res.status(201).json({
      status: "sucess",
      message: "Formulario Registrado",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const getPsicoForCompany = async (req, res) => {
  try {
    const [data] = await selectPsicoFroCompany(req.params.empresa);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};
