const express = require("express");
const { addEntry, updateEntry, deleteEntry, getEntry } = require("../controllers/studentsController");

const router = express.Router();


router.get("/",getEntry);
router.post("/add", addEntry);
router.put("/update/:id", updateEntry);
router.delete("/delete/:id", deleteEntry);

module.exports = router;