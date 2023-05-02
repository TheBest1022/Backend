import { Router } from "express";
import Auth from "./auth.routes.js"
import Docente from "./docente.routes.js"
import Student from "./student.routes.js";
import Empresa from "./empresa.routes.js";

const router = Router()

router.use('/api/auth', Auth)
router.use('/api/docente', Docente)
router.use('/api/student', Student)
router.use('/api/company', Empresa)

export default router