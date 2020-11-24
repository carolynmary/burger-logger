const orm = require("../config/orm");

// create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
      // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
}

// module.exports = function (sequelize, DataTypes) {
//     const Polls = sequelize.define("Polls", {
//        question: {
//           type: DataTypes.STRING,
//           validate: { len: [1, 200] }
//        },
//        optionOne: {
//           type: DataTypes.STRING,
//           validate: { len: [1, 100] }
//        },
//        optionTwo: {
//           type: DataTypes.STRING,
//           validate: { len: [1, 100] }
//        },
//        optionThree: {
//           type: DataTypes.STRING,
//           validate: { len: [1, 100] }
//        },
//        optionFour: {
//           type: DataTypes.STRING,
//           validate: { len: [1, 100] }
//        }
//     });
 
//     // --------------- COPIED THIS FROM ACTIVITY 14.13 (POST-AUTHOR-ASSOC) ---------------
//     // Polls.associate = function (models) {
//     //    // We're saying that a Poll should belong to a User
//     //    // A Poll can't be created without a User due to the foreign key constraint
//     //    Polls.belongsTo(models.Users, {
//     //       foreignKey: {
//     //          allowNull: false
//     //       }
//     //    });
//     // };
 
//     return Polls;
//  };

 
//  module.exports = function (sequelize, DataTypes) {
//     const Votes = sequelize.define("Votes", {
//        optionSelected: {
//           type: DataTypes.STRING,
//           validate: { len: [1, 100] }
//        }
//     });
 
//     // --------------- COPIED THIS FROM ACTIVITY 14.13 (POST-AUTHOR-ASSOC) ---------------
//     Votes.associate = function (models) {
//        // We're saying that a Vote should belong to a Poll
//        // A Vote can't be created without a Poll due to the foreign key constraint
//        Votes.belongsTo(models.Polls, {
//           foreignKey: {
//              allowNull: false
//           }
//        });
//     };
 
//     return Votes;
//  };
 










// module.exports = burger