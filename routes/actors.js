var express = require('express');
var router = express.Router();
const actorController = require('../controllers/actorController')

/* GET home page. */
router.get('/:id', actorController.actorDetail);

module.exports = router;