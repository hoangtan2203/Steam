const mysql = require('mysql2');
const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'test',
    port:'3306'
});

module.exports = {connection}