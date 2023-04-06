const express = require('express');
const router = express.Router();

router.use('/', require('./memberRouter.js'));

module.exports = router;
