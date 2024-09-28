import express from "express";
import { sendTheEmail } from "../controllers/emailController.js";

const router = express.Router();

router.post("/send-email", sendTheEmail);

export { router as EmailRouter };