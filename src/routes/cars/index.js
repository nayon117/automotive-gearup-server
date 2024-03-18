var express = require("express");
const { createCar, findByBrand, findAllCar, findOneCar } = require("../../api/cars/controllers");
var router = express.Router();

router.post('/cars',createCar )
// router.get('/cars/:brand',findByBrand );
router.get('/cars',findAllCar )
router.get('/cars/:id',findOneCar );


module.exports = router;