const orm = require("../config/orm");

const burger = {
    all: function (cb) {
        orm.all(
            "burgers",
            cb
        );
    },
    create: function (burgerName, cb) {
        orm.create(
            "burgers",
            ["burger_name", "devoured"],
            [burgerName, false],
            cb
        );
    },
    update: function (devouredBurgerId, cb) {
        orm.update(
            "burgers",
            { devoured: true },
            ["id=" + devouredBurgerId],
            cb
        );
    },
    // delete: function (condition, cb) {
    //     orm.delete(
    //         "burgers",
    //         condition,
    //         cb
    //     );
    // }
};

module.exports = burger;