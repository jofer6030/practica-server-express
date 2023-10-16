import { request, response } from "express";

export const exampleMiddleware = (req = request, res = response, next) => {
  if (!req.body.name) {
    return res.send("El campo name es requerido");
  }
  next();
};
