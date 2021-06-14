const router = require('express').Router();

const healthController = require('./health.controller');

router.get('/', healthController.health);

module.exports = router;
