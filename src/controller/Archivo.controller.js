import multer from "multer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { updatePdf } from "../model/Docente.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Funcion Multer -- configuración
const storage = multer.diskStorage({
  destination: join(__dirname, "../uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

export const subirPDf = async (req, res) => {
  try {
    if (req.file) {
      res.status(200).json({ message: "Archivo subido correctamente" });
    } else {
      res.status(400).json({ message: "Error al subir el archivo" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const modificarTema = async (req, res) => {
  const { idTema, Pdf } = req.body;
  console.log(req.body)
  if (!idTema || !Pdf) {
    return res.status(200).json({
      status: "error",
      message: "EXISTEN CAMPOS VACÍOS",
    });
  }
  try {
    await updatePdf(req.body);
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

export const mostrarPdf = async (req, res) => {
  const filename = req.params.filename;
  const filePath = join(__dirname, "../uploads", filename);
  res.sendFile(filePath);
}

export default upload;
