var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController');
const registerValidations = require("../middlewares/registerValidator")

/* GET home page. */
router.get('/', registerController.index);
router.post('/', registerValidations, registerController.store);

module.exports = router;
