const express = require("express");
const { handleGetAllUrls } = require("../controller/urls")
const router = express.Router();

// static route to render the home page
router.get("/", handleGetAllUrls);

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;
