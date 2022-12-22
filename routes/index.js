const express = require('express');
const router = express();
const homeController = require('../controller/home_controller');

console.log('Router loaded');

router.get('/', homeController.home);
router.use('/action-page', require('./action-page'));
router.use('/delete-task', require('./delete-task'));

module.exports = router;