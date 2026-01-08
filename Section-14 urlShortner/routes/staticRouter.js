const express = require("express");
const { handleGetAllUrls } = require("../controller/urls");
const { restrictTo } = require("../middlewares/auth");
const router = express.Router();

// static route to render the home page
router.get("/", restrictTo(["NORMAL"]), handleGetAllUrls);

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;
