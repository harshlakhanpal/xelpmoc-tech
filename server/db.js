const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "xelpmoc",
  },
});

knex
  .raw("SELECT 1 + 1 as test")
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.error("Error in connecting to DB."));

module.exports = knex;
