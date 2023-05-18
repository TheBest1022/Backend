import { Router } from "express";
import {
  getUserForId,
  getUserTeachForId,
  updateUserTeachForId,
  getUserDirectorForId,
  updateUserDirectorForId,
  disabledUser,
} from "../controller/user.controller.js";

const router = Router();

router.get("/:id", getUserForId);
router.get("/teach/:id", getUserTeachForId);
router.get("/director/:id", getUserDirectorForId);
router.put("/teach/:id", updateUserTeachForId);
router.put("/director/:id", updateUserDirectorForId);
router.delete("/:id", disabledUser);

export default router;
