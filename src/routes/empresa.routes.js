import { Router } from "express";
import { createCompany, getEmpresa, updateCompanyId, getUserCompanyId } from "../controller/Empresa.controller.js";

const router = Router();

//get
router.get("/", getEmpresa);
router.get("/:id", getUserCompanyId)

//post
router.post("/", createCompany);

//update
router.put("/company/:id", updateCompanyId);

export default router;
