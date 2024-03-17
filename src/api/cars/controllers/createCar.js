const Cars = require("../../../models/Cars");

const createCar = async (req, res) => {
  try {
    const car = req.body;
    const newCar = await new Cars(car).save();
    res.status(201).send(newCar);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = createCar;
