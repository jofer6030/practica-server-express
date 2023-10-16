import { Router } from "express";
import UserController from "../controllers/user.controllers.js";
import { exampleMiddleware } from "../middleware/example.middleware.js";

import { userParamValidators } from "../middleware/validators/user.validators.js";

const router = Router();
const userControllers = new UserController();

router.get("/", [exampleMiddleware], userControllers.getAllUsers);
router.get("/by-id/:id", [userParamValidators], userControllers.getUser);

export default router;
