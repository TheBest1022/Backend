import { Router } from "express";
import {
  getStudent,
  createAssistence,
  getStudentForCompany,
} from "../controller/student.controller.js";
import { obtenerFaceId, createNewTime } from "../controller/face.controller.js";
import { createTimePractice } from "../controller/practice.controller.js";
const router = Router();

//Ruta estudiante
router.get("/", getStudent); //Obtener
router.get("/company/:empresa", getStudentForCompany); //Obtener
router.post("/assistence", createAssistence); //Obtener

router.get("/face/:id", obtenerFaceId); // Face
router.post("/score/emotion", createNewTime); //TiempoFace
router.post("/score/practice", createTimePractice)//TiempoPractica

export default router;
