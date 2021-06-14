const router = require('express').Router();

const carController = require('./car.controller');

router.get('/', carController.car);

module.exports = router;
