const express = require("express");
const {
  handleGenerateShortUrl,
  handleGetShortId,
  handleGetAnalytics,
  handleDeleteUrlById,
} = require("../controller/urls");

const router = express.Router();

router.post("/", handleGenerateShortUrl);

router.get("/:shortId", handleGetShortId);
router.delete("/:shortId", handleDeleteUrlById)

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
