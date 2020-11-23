const connection = require("./connection.js")

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.

// const orm = {

//     selectAll: function (tableInput, cb) {
//         var queryString = "SELECT * FROM " + tableInput + ";";
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },

//     insertOne: function () {
//         var queryString = "INSERT INTO " +  + ";";

//     }
    
//     updateOne()
// }

// module.exports = orm;