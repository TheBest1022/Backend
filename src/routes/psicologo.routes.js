import { Router } from "express";
import { registerRias, getPsicoForCompany, getStudentForCompany } from "../controller/Psicologo.controller.js";

const router = Router();

router.post("/psicologo/register", registerRias)//Register de Rias
router.get("/psicologo/:empresa", getPsicoForCompany)// Obetner datos Psico
router.get("/:id/users", getStudentForCompany)

export default router;