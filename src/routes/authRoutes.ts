import { Router } from "express";
import { AuthController } from "../controllers/authController";

const router = Router();

router.post("/register", AuthController.register);
router.post("/signin", AuthController.login);
router.post("/refresh-token", AuthController.refreshToken);

export default router;
