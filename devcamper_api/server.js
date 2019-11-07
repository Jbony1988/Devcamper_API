const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Route files

const bootcamps = require("./routes/bootcamp");
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev logging middle ware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

//Mount Routers

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} 
  mode on port ${PORT}`)
);
