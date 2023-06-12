import { Router } from "express";
import Admin from "./admin.routes.js"
import Auth from "./auth.routes.js"
import User from "./user.routes.js"
import Docente from "./docente.routes.js"
import Student from "./student.routes.js";
import Empresa from "./empresa.routes.js";
import Curso from "./curso.routes.js";
import Psicologo from "./psicologo.routes.js"

const router = Router()

router.use('/api/admin', Admin)
router.use('/api/user', User)
router.use('/api/auth', Auth)
router.use('/api/docente', Docente)
router.use('/api/student', Student)
router.use('/api/company', Empresa)
router.use('/api/course', Curso)
router.use('/api/piscogolo', Psicologo)

export default router