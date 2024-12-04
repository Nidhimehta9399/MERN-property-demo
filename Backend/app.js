const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRouter = require("./routes/User");
const roleRouter = require("./routes/Role");
const propertyRouter = require("./routes/Property");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
// mongoose.connect("mongodb://localhost:27017/property-management", {
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

mongoose
  .connect("mongodb://127.0.0.1:27017/property-management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Main App Route"));
app.use("/users", usersRouter);
app.use("/roles", roleRouter);
app.use("/property", propertyRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
