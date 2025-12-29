const express = require("express");
const { handleGetAllUrls } = require("../controller/urls")
const router = express.Router();

// static route to render the home page
router.get("/", handleGetAllUrls);

module.exports = router;
