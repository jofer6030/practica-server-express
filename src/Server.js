import express from "express";

import RoutesApp from "./routes/index.routes.js";

class Server {
  #app = express();
  #port = process.env.PORT || 3000;
  #routerApp = new RoutesApp();

  constructor() {
    this.#middlwares();
    this.#routes();
  }

  #middlwares() {
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
  }

  #routes() {
    this.#app.use("/api", this.#routerApp.router);
  }

  listen() {
    this.#app.listen(this.#port, () => {
      console.log(`Server is running on port: ${this.#port}`);
    });
  }
}

export default Server;
