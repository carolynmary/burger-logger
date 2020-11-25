const orm = require("../config/orm");

const burger = {

    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (burgerName, cb) {
        orm.create(
            "burgers",
            ["burger_name", "devoured"],
            [burgerName, false],
            cb
        );
    },

    update: function (colValObject, condition, cb) {
        orm.update(
            "burgers",
            colValObject,
            condition,
            cb
        );
    },

    delete: function (condition, cb) {
        orm.delete(
            "burgers",
            condition,
            cb
        );
    }
}

module.exports = burger;