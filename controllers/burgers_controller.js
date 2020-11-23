const router = require("express").Router();
const burger = require("../models/burger");

// html routes
router.get("/", function(req, res) {
    res.render("index");
});

// api routes

module.exports = router;