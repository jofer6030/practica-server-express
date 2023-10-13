import { Router } from "express";
import UserController from "../controllers/user.controllers.js";

const router = Router();
const userControllers = new UserController();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUser);

export default router;
