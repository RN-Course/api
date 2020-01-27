const express = require("express");
const { PORT } = require("./config");
const UserRoute = require("./Routes/User");
const ContactRoute = require("./Routes/Contact");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", UserRoute);
app.use("/api/contacts", ContactRoute);

app.listen(PORT, () => {
  console.log(`Open connection at port: ${PORT}`);
});
