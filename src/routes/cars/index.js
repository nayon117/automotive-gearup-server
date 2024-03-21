var express = require("express");
const { createCar, findAllCar, findOneCar, updateCar, carRequests, deleteCar } = require("../../api/cars/controllers");
var router = express.Router();

router.post('/cars',createCar )
router.get('/cars',findAllCar )
router.get('/cars/:id',findOneCar );
router.put('/update/:id',updateCar );
router.get("/car-add/requests", carRequests);
router.delete("/car-add/:id", deleteCar );


module.exports = router;