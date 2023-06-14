import { Router } from "express";
import { getStudent, createAssistence, getStudentForCompany } from "../controller/student.controller.js";
import { obtenerFaceId } from "../controller/face.controller.js";
const router = Router();

//Ruta estudiante
router.get("/", getStudent); //Obtener
router.get("/company/:empresa", getStudentForCompany); //Obtener
router.post("/assistence", createAssistence); //Obtener
router.get("/face/:id", obtenerFaceId)

export default router;
