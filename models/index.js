



var Sequelize = require('sequelize');

if(process.env.DATABASE_URL) {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		logging: true
	});
} else {
	sequelize = new Sequelize('postgres://' + env.user + '@localhost:5432/fish_happens');
}


var env = require('../.env.js');

// var sequelize = new Sequelize(DATABASE_URL || 'postgres://' + env.user + '@localhost:5432/fish_happens');
// console.log(process.env.USERNAME);
// Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var User = sequelize.import("./user_sql");
var Location = sequelize.import("./location");


Location.belongsTo(User);
User.hasMany(Location);





module.exports.models = {
	User: User,
	Location: Location
};