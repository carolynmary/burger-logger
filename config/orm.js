const connection = require("./connection.js")

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    const arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// mioght need to change const to let ========
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    const arr = [];
    for (const key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {

    all: function (table, cb) {
        const queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // why only 'value' in parameter?
    create: function (table, column, value, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(value.length);
        queryString += ") ";

        console.log("INSIDE CREATE: ", queryString);

        connection.query(queryString, value, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // An example of objColVal would be {name: panther, sleepy: true}
    // look into what condiition is calling
    update: function (table, colValObject, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(colValObject);
        queryString += " WHERE ";
        queryString += condition;

        console.log("INSIDE UPDATE: ", queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    delete: function (table, condition, cb) {
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;