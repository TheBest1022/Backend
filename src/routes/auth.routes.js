import { Router } from "express";
import {
    singIng,
    singUp,
    createDirector
} from "../controller/auth.controller.js"

const router = Router();

router.post("/", singIng) // ingresar
router.post("/register", singUp) // Registro
router.post("/register/director", createDirector) // Registro director

export default router;