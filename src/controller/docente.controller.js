import {
  addDocente,
  nameDocente,
  getDocente,
  updateDocente,
  addTema,
  getTemaId,
  deteleTema,
  sendMensaje,
  obtenerMessage,
  addCurso,
  updateMessage,
  selectAllDocente,
} from "../model/Docente.js";
import { passwordEncrypt } from "../helpers/helpers.js";
import { newUser, selectLastId, selectLastIdCurso } from "../model/User.js";
import { selectAssistence } from "../model/Asistencia.js";
import excel from "xlsx";

export const singUpDocente = async (req, res) => {
  const {
    documento,
    Nombre_Docente,
    Apellido_Docente,
    usuario,
    password,
    idCurso,
    rol,
  } = req.body;
  console.log(req.body);
  if (
    !documento ||
    !Nombre_Docente ||
    !Apellido_Docente ||
    !usuario ||
    !password ||
    Object.entries(idCurso).length === 0 ||
    !rol
  ) {
    return res.status(200).json({
      status: "error",
      message: "EXISTEN CAMPOS VACÍOS",
    });
  }
  if (password.length != 4) {
    return res.status(200).json({
      status: "error",
      message: "PERMISO DE CONTRASEÑA: 4 NÚMEROS",
    });
  }
  try {
    const passwordnew = await passwordEncrypt(password);
    await newUser(req.body, passwordnew);
    const [data] = await selectLastId();
    setTimeout(async () => {
      if (data.length > 0) {
        await addDocente(req.body, data[0].id);
        const [id] = await selectLastIdCurso();
        setTimeout(async () => {
          if (id.length > 0) {
            idCurso.map(async (item) => {
              await addCurso(id[0].id, item);
            });
          }
        }, 2000);
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

export const obtenerNombreDocente = async (req, res) => {
  try {
    if (req.params.empresa == "null") {
      const [data] = await selectAllDocente();
      return res.status(201).json(data);
    } else {
      const [data] = await nameDocente(req.params.empresa);
      return res.status(201).json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const obtenerDocente = async (req, res) => {
  try {
    const [data] = await getDocente(req.params.id);
    return res.status(201).json(data[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const ActualizarDocente = async (req, res) => {
  const { Nombre_Docente, Apellido_Docente, idDocente } = req.body;
  if (!Nombre_Docente || !Apellido_Docente || !idDocente) {
    return res.status(200).json({
      status: "error",
      message: "EXISTEN CAMPOS VACÍOS",
    });
  }
  try {
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

export const agregarTema = async (req, res) => {
  const { Descripcion, idCurso } = req.body;
  console.log(req.body);
  if (!Descripcion || !idCurso) {
    return res.status(200).json({
      status: "error",
      message: "EXISTEN CAMPOS VACÍOS",
    });
  }
  try {
    await addTema(req.body);
    return res.status(201).json({
      status: "success",
      message: "AGREGADO",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const obtenerTemaId = async (req, res) => {
  try {
    const [data] = await getTemaId(req.params.id);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const borrarTema = async (req, res) => {
  try {
    await deteleTema(req.params.id);
    return res.status(204).json({
      status: "success",
      message: `Eliminado`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const mensajeNuevo = async (req, res) => {
  const { Mensaje, idCurso } = req.body;
  if (!Mensaje || !idCurso) {
    return res.status(200).json({
      status: "error",
      message: "EXISTEN CAMPOS VACÍOS",
    });
  }
  try {
    await sendMensaje(req.body);
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

export const obtenerMensajeId = async (req, res) => {
  try {
    const [data] = await obtenerMessage(req.params.id);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: `ERROR DE SERVIDOR: ${error}`,
    });
  }
};

export const actualizarMensaje = async (req, res) => {
  console.log(req.params);
  try {
    await updateMessage(req.params.id);
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

//Reportes

export const excelGenerate = async (req, res) => {
  try {
    const courseId = req.query.course; // Obtener el courseId desde la solicitud
    const [data] = await selectAssistence(req.params.company);

    // Filtrar los datos según el curso seleccionado si existe
    const filteredData = courseId
      ? data.filter((item) => item.id_curso == courseId)
      : data;

    // Crear un nuevo array de objetos con solo los campos deseados
    const outputData = filteredData.map((item) => {
      return {
        Id: item.id,
        Estudiante: item.estudiante,
        Docente: item.docente,
        Curso: item.curso,
        Estado: item.estado,
        Fecha: item.fecha,
        Colegio: item.empresa,
      };
    });

    // Ordenar el array por fecha
    outputData.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    const ws = excel.utils.json_to_sheet(outputData, {
      header: [
        "Id",
        "Estudiante",
        "Docente",
        "Curso",
        "Estado",
        "Fecha",
        "Colegio",
      ],
      skipHeader: false,
    });

    // Estilo de encabezado
    const headerStyle = {
      font: {
        bold: true,
        color: { rgb: "FFFFFF" },
      },
      fill: {
        fgColor: { rgb: "4F81BD" },
      },
      alignment: {
        horizontal: "center",
      },
    };

    // Aplica el estilo de encabezado a las celdas del encabezado
    for (let i = 0; i < 5; i++) {
      const cell = ws[excel.utils.encode_cell({ c: i, r: 0 })];
      if (cell) {
        cell.s = headerStyle;
      }
    }

    const wb = excel.utils.book_new();
    excel.utils.book_append_sheet(wb, ws, "Reportes");
    const buffer = excel.write(wb, { type: "buffer", bookType: "xlsx" });
    res.setHeader("Content-Disposition", "attachment: filename=report.xlsx");
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(buffer);
  } catch (error) {
    console.error(error);
  }
};
