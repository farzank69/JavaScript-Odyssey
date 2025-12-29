const express = require("express");
const { handleGetAllUrls } = require("../controller/urls")
const router = express.Router();

router.get("/", handleGetAllUrls);

module.exports = router;
