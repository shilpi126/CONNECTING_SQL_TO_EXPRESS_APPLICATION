const express = require("express");
const db = require("./utils/db.connection")
const studentsRouter = require("./routes/studentsRoutes");

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello World");
})


app.use("/students",studentsRouter );


app.listen(3000, (err)=>{
    console.log("Server is running...");
})