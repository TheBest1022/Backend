import { Router } from "express";
import { getCourseForId, getCourseForTheme } from "../controller/curso.controller.js";

const router = Router();

router.get("/docente/:id", getCourseForId)
router.get("/:docente/tema/:curso", getCourseForTheme)

export default router;