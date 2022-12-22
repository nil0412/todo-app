const express = require('express');
const router = express();

router.use(express.urlencoded());

const deleteTaskController = require('../controller/deleteTask_Controller');
console.log("Delete Task");
router.get('/', deleteTaskController.delete);

module.exports = router;