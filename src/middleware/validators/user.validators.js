import { param, validationResult } from "express-validator";

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
    .customSanitizer(toNumber)
    .isInt()
    .withMessage("El `id` debe ser un número")
    .custom(isMajorToZero),
  validationErrors,
];

function toNumber(value) {
  return Number(value);
}

function isMajorToZero(value) {
  if (value <= 0) {
    throw new Error("El `id` debe ser mayor a 0");
  }
  return true;
}

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
