/** Database for lunchly */

const {Client} = require("pg");


const db = new Client({
    user: 'darewood',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: "lunchly",
  })

db.connect();

module.exports = db;
