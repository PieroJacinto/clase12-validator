const { body } = require("express-validator");
const db = require("../database/models");

const registerValidations = [
    body("name")
        .notEmpty()
        .withMessage("Debes completar tu nombre")
        .bail()
        .isLength({ min: 4 })
        .withMessage("El nombre debe tener al menos dos caracteres"),
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .isEmail()
        .withMessage("Debes escribir un formato de correo válido")
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: {
                    email: req.body.email,
                },
            }).then(function (userToRegister) {
                if (userToRegister) {
                    throw new Error("El e-mail ingresado ya está registrado");
                }
            });
        }),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir una contraseña")        
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos ocho caracteres"),
    body("retypePassword")
        .notEmpty()
        .withMessage("Debes repetir tu contraseña")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Las contraseñas no coinciden");
            }
            return true;
        })
];
module.exports = registerValidations;
