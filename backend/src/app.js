import express from "express";
import cors from "cors";
import "express-async-errors";
import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

app.use(errorHandler);
export default app;