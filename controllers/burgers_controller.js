const router = require("express").Router();
const burger = require("../models/burger");

// get all burgers from db and send to index.handlebars
router.get("/", function (req, res) {
    burger.all(data => {
        res.render("index", { burgersObj: data });
    });
});

// add burger to database
router.post("/api/burger", function (req, res) {
    const newBurger = req.body.burger_name;
    if (newBurger === "") {
        return false
    }
    else {
        burger.create(req.body.burger_name, function (result) {
            res.redirect("/")
        })
    };
});

// update burger from devoured(false) to devoured(true)
router.put("/api/burger/:id", function (req, res) {
    const devouredBurgerId = req.params.id;
    burger.update(devouredBurgerId, function (result) {
        // console.log(result);
        res.status(200).end();
    });
});

module.exports = router;