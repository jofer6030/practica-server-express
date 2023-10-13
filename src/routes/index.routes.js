import { Router } from "express";

import userRoutes from "./user.routes.js";

class RoutesApp {
  router = Router();

  constructor() {
    this.#routers();
  }

  #routers() {
    this.router.use("/user", userRoutes);
  }
}

export default RoutesApp;
