import { newRegisterRias } from "../model/Psicologo.js";

export const registerRias = async (req, res) => {
  const {
    datos,
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
    mnv,
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
    !datos ||
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
    !mnv ||
    !TotalRv ||
    !TotalNRv ||
    !Total ||
    !Memoria ||
    !Indiceverbal ||
    !IndiceNoverbal ||
    IndiceGeneral ||
    !IndiceMemoria
  ) {
    return res.status(200).json({
      status: "error",
      message: "Existen Campos Vacíos",
    });
  }
  try {
    setTimeout(async () => {
      if (id.length > 0) {
        await newRegisterRias(req.body, id[0].id);
        return res.status(201).json({
          status: "sucess",
          message: "Registrado",
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
