const express = require('express');
const { handleGenerateShortUrl } = require('../controller/urls')

const router = express.Router();

router.post("/", handleGenerateShortUrl)


module.exports = router;