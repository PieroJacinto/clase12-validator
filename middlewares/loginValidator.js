const { body } = require("express-validator");
const db = require("../database/models");
const bcryptjs = require("bcryptjs");

const loginValidations = [
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
            }).then(function (userToLogin) {
                if (!userToLogin) {
                    throw new Error("El usuario no está registrado");
                }
            });
        }),
    body("password")
        .notEmpty()
        .withMessage("Debes introducir tu contraseña")
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: {
                    email: req.body.email,
                },
            }).then(function (userToLogin) {
                if (userToLogin) {
                    const password = userToLogin.password;
                    let passwordOk = bcryptjs.compareSync(req.body.password, password);
                    if (!passwordOk) {
                        throw new Error("La contraseña es incorrecta");
                    }
                }
            });
        }),
];

module.exports = loginValidations;
