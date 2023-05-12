import { Router } from "express";
import Admin from "./admin.routes.js"
import Auth from "./auth.routes.js"
import Docente from "./docente.routes.js"
import Student from "./student.routes.js";
import Empresa from "./empresa.routes.js";
import Curso from "./curso.routes.js";

const router = Router()

router.use('/api/admin', Admin)
router.use('/api/auth', Auth)
router.use('/api/docente', Docente)
router.use('/api/student', Student)
router.use('/api/company', Empresa)
router.use('/api/course', Curso)

export default router