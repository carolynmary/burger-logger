const router = require("express").Router();
const burger = require("../models/burger");

// get all burgers from db and send to index.handlebars
router.get("/", function(req, res) {
    
    res.render("index");
});

// add burger to database
router.post("/add", function(req, res) {
    // take value from input field and add to db
    // res.render("index");
});

// update burger from to be devoured (false) to devoured (true)
router.get("/:id", function(req, res) {
    // when 'devoured' button clicked, take value and update devoured from false to true
    // res.render("index");
});

module.exports = router;