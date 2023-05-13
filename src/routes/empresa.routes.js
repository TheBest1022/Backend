import { Router } from "express";
import { createCompany, getEmpresa } from "../controller/Empresa.controller.js";

const router = Router();

router.get("/", getEmpresa);
router.post("/", createCompany);

export default router;
