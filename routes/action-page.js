const express = require('express');
const router = express();

router.use(express.urlencoded());

const actionPageController = require('../controller/actionPage_Controller');
console.log("Action Page");
router.post('/', actionPageController.action);

module.exports = router;