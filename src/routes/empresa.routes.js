import { Router } from "express";
import { getEmpresa } from "../controller/Empresa.controller.js";

const router = Router();

router.get("/", getEmpresa);

export default router;
