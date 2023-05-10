import { Router } from "express";
import {
    singIng,
    singUp,
    createDirector,
    createUser
} from "../controller/auth.controller.js"

const router = Router();

router.post("/", singIng) // ingresar
router.post("/admin/register", createUser) // crear
router.post("/register", singUp) // Registro
router.post("/register/director", createDirector) // Registro director

export default router;