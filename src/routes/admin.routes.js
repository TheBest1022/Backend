import { Router } from "express";

import { createUser } from "../controller/auth.controller.js";
import { getUsersForCompany } from "../controller/admin.controller.js";

const router = Router();

router.get("/:id/users", getUsersForCompany); // ingresar
router.post("/register", createUser); // ingresar

export default router;
