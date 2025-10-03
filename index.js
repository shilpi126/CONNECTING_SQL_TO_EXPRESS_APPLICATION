const express = require("express");
const mysql = require("mysql2");

const app = express();

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

    const createUsersTable = `create table Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
    )`

    connection.execute(createUsersTable, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Table is created");
    })


    const createBusesTable = `create table Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(50) UNIQUE,
    totalSeats INT,
    availableSeats INT
    )`;

    connection.execute(createBusesTable, (err)=>{
        if(err){
            console.log("Error creating Buses table:", err);
            connection.end();
            return;
        }

        console.log("Buses table created")
    })


    const createBookingsTable = `create table Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
    
    )`;

    connection.execute(createBookingsTable, (err)=>{
        if(err){
            console.log("Error creating Bookings table:", err);
            connection.end();
            return;
        };

        console.log("Booking table created");
    });


    const createPaymentsTable = `create table Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus VARCHAR(50)
    
    )`;

    connection.execute(createPaymentsTable, (err)=>{
        if(err){
            console.log("Error creating Payments table:", err);
            connection.end();
            return;
        };

        console.log("Payments table created");
    });



})



app.get("/", (req,res)=>{
    res.send("Hello World");
})

app.listen(3000, (err)=>{
    console.log("Server is running...");
})