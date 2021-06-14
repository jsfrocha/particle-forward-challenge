const router = require('express').Router();

const healthcheckRoutes = require('./health');
const carRoutes = require('./car');

router.use('/health', healthcheckRoutes);
router.use('/car', carRoutes);

module.exports = router;
