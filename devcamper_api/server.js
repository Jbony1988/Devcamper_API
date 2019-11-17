const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHnadler = require("./middleware/error");
const connectDB = require("./config/db");

// load env vars
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

// Route files

const bootcamps = require("./routes/bootcamp");

const courses = require("./routes/courses");

const app = express();

// Body parser
app.use(express.json());

// Dev logging middle ware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

//Mount Routers

app.use("/api/v1/bootcamps", bootcamps);

app.use("/api/v1/courses", courses);

app.use(errorHnadler);
const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} 
  mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // close server and exit process
  server.close(() => process.exit(1));
});
