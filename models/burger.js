const orm = require("../config/orm");

const burger = {

    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    // The variables cols and vals are arrays.
    // create: function (column, value, cb) {
    //     orm.create("burgers", column, value, function (res) {
    //         cb(res);
    //     });
    // },
    // update: function (colValObject, condition, cb) {
    //     orm.update("burgers", colValObject, condition, function (res) {
    //         cb(res);
    //     });
    // },
    // delete: function (condition, cb) {
    //     orm.delete("burgers", condition, function (res) {
    //         cb(res);
    //     });
    // }
}

module.exports = burger;