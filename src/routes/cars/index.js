var express = require("express");
const { createCar, findByBrand } = require("../../api/cars/controllers");
var router = express.Router();

router.post('/cars',createCar )
router.get('/cars/:brand',findByBrand );

module.exports = router;