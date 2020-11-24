const router = require("express").Router();
const burger = require("../models/burger");

// get all burgers from db and send to index.handlebars
router.get("/", function (req, res) {
    burger.all(data => {
        console.log("GET ROUTE DATA: ", data);
        res.render("index", data);
    });
});

// add burger to database
router.post("/api/burger", function (req, res) {
    console.log("ADD REQ.BODY: ", req.body);
    burger.create([
        "name",   // ======== check if this is right
        "devoured"
    ], [
        req.body.name,  // ======== check if this is right
        req.body.devoured  // ======== check if this is right
    ],
        function (result) {
            // res.json({ id: result.insertId });
            res.json(result);  // ======== check if this is right
        });
});

// update burger from to be devoured (false) to devoured (true)
// router.get("/api/burger/:id", function (req, res) {
    // when 'devoured' button clicked, take value and update devoured from false to true
    // res.render("index");
// });

module.exports = router;