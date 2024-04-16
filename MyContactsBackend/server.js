const express = require("express");
const app = express();
require("dotenv").config();
const contactRoute = require("./routes/contactsRoute");
const urRoute = require("./routes/userRoute.js");
const errorHandler = require("./middlewares/errorHandler.js");
const connectDb = require("./config/connect.js");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRoute);
app.use("/api/user", urRoute);
app.use(errorHandler);

app.listen(port, () => {
  connectDb();
  console.log(`app listening at port ${port}`);
});
