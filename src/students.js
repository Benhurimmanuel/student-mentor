const express = require("express");
const app = express();
const cors = require("cors");
const mongodb = require("mongodb");
const { response } = require("express");
const URL = "mongodb://localhost:27017";
const DB = "newdb";

app.use(cors());
app.use(express.json());

app.get("/students", async function (req, res) {
  try {
    // connect to DB
    let connection = await mongodb.connect(URL);
    // Select DB
    let db = connection.db(DB);
    // crud Operation
    let students = await db.collection("students").find().toArray();
    // close Connection
    await connection.close();
    res.json(students);
  } catch (error) {
    console.log(error);
  }
});

app.post("/student", async function (req, res) {
  try {
    // connect to DB
    let connection = await mongodb.connect(URL);
    // select DB
    let db = connection.db(DB);
    // CRUD
    await db.collection("students").insertOne(req.body);
    // close Connection
    await connection.close();
    res.json({ Message: "student created" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/student/:id", async function (req, res) {
  try {
    let connection = await mongodb.connect(URL);
    let db = connection.db(DB);
    let student = await db
      .collection("students")
      .findOne({ _id: mongodb.ObjectID(req.params.id) });
    // close Connection
    await connection.close();
    res.json({ message: student });
  } catch (error) {
    console.log(error);
  }
});
app.put("/student/:id", async function (req, res) {
  try {
    let connection = await mongodb.connect(URL);
    let db = connection.db(DB);
    await db
      .collection("students")
      .updateOne({ _id: mongodb.ObjectID(req.params.id) }, { $set: req.body });
    // close Connection
    await connection.close();
    res.json({ message: "studentUpdated" });
  } catch (error) {
    console.log(error);
  }
});
app.delete("/student/:id", async function (req, res) {
  try {
    let connection = await mongodb.connect(URL);
    let db = connection.db(DB);
    await db.collection("students").deleteOne({
      _id: mongodb.ObjectID(req.params.id),
    });
    await collection.close();
    res.json({
      message: "Deleted",
    })
  } catch (error) {}
});
app.listen(8080, function () {
  console.log("server running");
});
