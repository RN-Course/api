const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.send("hellllllo from routes");
});

module.exports = Router;
