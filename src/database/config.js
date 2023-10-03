const { Sequelize } = require("sequelize");

let sqliteDabatasePath = "../database.sqlite3";

const database = new Sequelize({
	dialect: "sqlite",
	storage: sqliteDabatasePath,
});

module.exports = database;
