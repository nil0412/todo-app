const express = require('express');
const router = express();

const homeController = require('../controller/home_controller');

router.get('/', homeController.home);


module.exports = router;