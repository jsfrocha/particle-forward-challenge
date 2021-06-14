const carData = require('../../../data/car.json');

const car = (req, res) => {
    return res.status(200).json(carData);
}

module.exports = {
    car
}
