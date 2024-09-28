import express from "express";
import { RegisterTeam } from "../controllers/registerController.js";

const router = express.Router();

router.post("/register-team", RegisterTeam);

export { router as RegisterRouter };
