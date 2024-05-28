const { body } = require("express-validator");

const newMovieValidator = [
    body("title")
        .notEmpty()
        .withMessage("Debes ingresar el título de la película"),
    body("rating")
        .notEmpty()
        .withMessage("Debes ingresar el rating de la película")
        .isFloat({ min: 0, max: 10 })
        .withMessage("El rating debe estar entre 0 y 10"),
    body("awards")
        .notEmpty()
        .withMessage("Debes ingresar la cantidad de premios de la película")
        .isInt({ min: 0 })
        .withMessage("La cantidad de premios debe ser un número entero mayor o igual a 0"),
    body("release_date")
        .notEmpty()
        .withMessage("Debes ingresar la fecha de estreno de la película"),
    body("length")
        .notEmpty()
        .withMessage("Debes ingresar la duración de la película")
        .isInt({ min: 1 })
        .withMessage("La duración debe ser un número entero mayor que 0")    
];

module.exports = newMovieValidator;
