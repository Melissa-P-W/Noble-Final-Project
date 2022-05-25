const mysql = require('mysql2');

// const pool = mysql.createPool({
const con = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'noble'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!")
})

module.exports = con;