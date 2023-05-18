const express = require('express');
const router = express.Router();

router.use('/', require('./API/Api'));

module.exports = router;
