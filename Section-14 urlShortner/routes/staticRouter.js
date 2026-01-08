const express = require("express");
const { handleGetAllUrls } = require("../controller/urls");
const { restrictTo } = require("../middlewares/auth");
const URL = require("../models/url");
const router = express.Router();

router.get("/admin/urls", restrictTo(["ADMIN"]), async(req, res) => {
    const allUrls = await URL.find({});
    return res.render("home", {
        urls: allUrls,
    });
});

// static route to render the home page
router.get("/", restrictTo(["NORMAL", "ADMIN"]), handleGetAllUrls);

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;
