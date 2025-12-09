import express from "express";
import { createAppt, listMine } from "../controllers/appointmentController.js";
import { protect, allowRoles } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, allowRoles("patient"), createAppt);
router.get("/me", protect, listMine);

export default router;
