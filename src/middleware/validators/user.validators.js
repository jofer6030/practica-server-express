import { check, body, query, param, validationResult } from "express-validator";

/**
 * const validationErrors = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
  }
*/

export const userParamValidators = [
  param("id")
    .exists()
    .withMessage("El `id` es requerido")
    .isNumeric()
    .withMessage("El `id` debe ser un número"),
  validationErrors,
];

function validationErrors(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    return res.status(400).json({
      messages: errorMessages,
    });
  }
  next();
}
