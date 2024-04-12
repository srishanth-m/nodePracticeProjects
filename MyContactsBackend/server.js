const express = require("express");
const app = express();
require("dotenv").config();
const contactRoute = require("./routes/contactsRoute");

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts", contactRoute);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
