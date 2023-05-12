import { Router } from "express";
import { getCourseForId } from "../controller/curso.controller.js";

const router = Router();

router.get("/docente/:id", getCourseForId)

export default router;