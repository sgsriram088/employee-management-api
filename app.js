const express = require("express");
const app = express();
const port = 3000;
const employeeRoutes = require("./routes/employeeRoutes");

app.use(express.json());

//intialize custom middleware
app.use((req, res, next) => {
  req.timestamp = new Date();
  console.log(req.method, req.url);
  next();
});

app.use("/api/employees", employeeRoutes);

// 404 Error Middleware
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// error handling middleware
app.use((err, req, res, next) => {
  console.log(err.message);
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});
app.listen(port, () => {
  console.log("log message");
});
