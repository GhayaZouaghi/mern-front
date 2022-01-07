const express = require("express");

const app = express();

require("dotenv").config();

// connect database
const connectDB = require("./config/connectDB");
connectDB();
// bodyparser middleware

app.use(express.json());

// routes
const router = require("./routes/contact");
app.use("/api/contact", router);
// create server
const port = process.env.PORT;

app.listen(port, (error) => {
  error
    ? console.log("Connection failed to the server !")
    : console.log(`Server is running on port ${port} ...`);
});
