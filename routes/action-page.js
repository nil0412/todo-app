const express = require('express');
const router = express();

const actionPageController = require('../controller/actionPage_Controller');

router.post('/action-page', actionPageController.action);

module.exports = router;