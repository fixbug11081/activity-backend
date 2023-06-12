const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const ActivityRouter = require("./routes/activity.route");

const app = express();
app.use("/api", ActivityRouter);
app.use(cors({
   origin :"http://localhost:5000/api/",
   optionsSuccessStatus: 200 ,
   methods: "GET, PUT,POST"
}));
   
/* Loading the environment variables from the .env file. */

require("dotenv").config();


const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoapiDB";



app.use(express.json());



app.get("/", (req, res) => {

  res.send("Hello World!");

});


/* Connecting to the database and then starting the server. */

mongoose

  .connect(MONGODB_URI, { useNewUrlParser: true })

  .then(() => {

    app.listen(PORT, console.log("Server stated on port 5000"));

  })

  .catch((err) => {

    console.log(err);

  });