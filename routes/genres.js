var express = require('express');
var router = express.Router();
const genreController = require('../controllers/genreController')

/* GET home page. */
router.get('/:id', genreController.genreDetail);

module.exports = router;