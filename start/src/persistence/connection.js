//import { Sequelize } from "sequelize";
const { DB, DB_USER, DB_PASSWORD, DB_HOST } = require("../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  dialect: "mysql",
  host: DB_HOST,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });
