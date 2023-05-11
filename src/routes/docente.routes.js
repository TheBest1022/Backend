import { Router } from "express";
import {
  singUpDocente,
  obtenerNombreDocente,
  obtenerDocente,
  ActualizarDocente,
  agregarTema,
  obtenerTemaId,
  borrarTema,
  mensajeNuevo,
  obtenerMensajeId,
  actualizarMensaje,
  excelGenerate
} from "../controller/docente.controller.js";

import upload, {
  subirPDf,
  modificarTema,
  mostrarPdf,
} from "../controller/Archivo.controller.js";

const router = Router();

router.post("/register", singUpDocente); // Registro
router.get("/names/:empresa", obtenerNombreDocente);
router.get("/:id", obtenerDocente); // Datos_Docente
router.put("/update", ActualizarDocente); // Actualizar
router.post("/tema", agregarTema); // Tema
router.get("/tema/:id", obtenerTemaId); // TemaId
router.delete("/delete/:id", borrarTema); // Eliminar
router.post("/upload", upload.single("file"), subirPDf); //subir pdf
router.put("/updatePdf", modificarTema); //ModificarTema
router.get("/file/:filename", mostrarPdf); //Mostras Nuevo Pdf
router.post("/mensaje", mensajeNuevo); // Enviar Mensaje
router.get("/mensaje/:id", obtenerMensajeId); // Enviar Mensaje
router.put("/mensaje/update/:id", actualizarMensaje); // Actualizar Mensaje

//Reporte
router.get("/report/assistence/:company", excelGenerate)

export default router;
