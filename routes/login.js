var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');

const loginValidations = require("../middlewares/loginValidator")

/* GET home page. */
router.get('/', loginController.index);
router.post('/', loginValidations, loginController.login);
router.post('/logout', loginController.logout);


module.exports = router;