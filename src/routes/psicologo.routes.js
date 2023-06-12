import { Router } from "express";
import { registerRias } from "../controller/Psicologo.controller.js";

const router = Router();

router.post("/psicologo/register", registerRias)//Register de Rias

export default router;