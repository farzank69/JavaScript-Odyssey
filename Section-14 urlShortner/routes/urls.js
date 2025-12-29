const express = require("express");
const {
  handleGenerateShortUrl,
  handleGetShortId,
  handleGetAnalytics,
} = require("../controller/urls");

const router = express.Router();

router.post("/", handleGenerateShortUrl);

router.get("/:shortId", handleGetShortId);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
