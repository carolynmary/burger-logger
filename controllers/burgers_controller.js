const router = require("express").Router();
const burger = require("../models/burger");

// get all burgers from db and send to index.handlebars
router.get("/", function (req, res) {
    burger.all(data => {
        // console.log("GET ROUTE DATA: ", data);
        res.render("index", { burgersObj: data });
    });
});

// HOW TO PREVENT A POST IF NULL?
// add burger to database
router.post("/api/burger", function (req, res) {
    console.log("ADD REQ.BODY: ", req.body);
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

// update burger from to be devoured (false) to devoured (true)
router.put("/api/burger/:id", function (req, res) {
    const devouredBurger = req.params.id;
    // when 'devoured' button clicked, take value and update devoured from false to true
    res.redirect("/");
});

module.exports = router;