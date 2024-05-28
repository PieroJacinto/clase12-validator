const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require("express-validator");

let registerController = {
    index: function (req, res) {
        //Mostrar el formulario de registro
        return res.render('register');
    },
    store: function (req, res) {
         //obtenemos los restultados de las validaciones
         const validationErrors = validationResult(req);
         // preguntamos si hay errores
         if (validationErrors.errors.length > 0) {
            
            return res.render("newMovie", {
               errors: validationErrors.mapped(),
               oldData: req.body,
             });
         }
        // Guardar un usuario en la db
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10), //TODO: Agregar bcrypt.
        };
        //creamos el usuario
        db.User
            .create(user)
            .then(function (user) {
                return res.redirect("/login");
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
            });
    },

};
module.exports = registerController;