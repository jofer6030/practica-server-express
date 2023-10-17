import { Router } from "express";
import UserController from "../controllers/user.controllers.js";
import { exampleMiddleware } from "../middleware/example.middleware.js";

import { userParamValidators } from "../middleware/validators/user.validators.js";
import UserService from "../services/user.service.js";

const router = Router();

const userService = new UserService();
const userControllers = new UserController(userService);

router.get("/", [exampleMiddleware], userControllers.getAllUsers);
router.get("/by-id/:id", [userParamValidators], userControllers.getUser);

export default router;
