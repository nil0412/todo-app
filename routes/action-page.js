const express = require('express');
const router = express();

const actionPageController = require('../controller/actionPage_Controller');
console.log("Action Page");
router.post('/', actionPageController.action);

module.exports = router;