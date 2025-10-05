const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'greatJob108',
    database:'testdb',
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("Connection has been created");

    const createStudentsTable = `create table IF NOT EXISTS Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
    )`

    connection.execute(createStudentsTable, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Student table is created");
    })



})


module.exports = connection;
