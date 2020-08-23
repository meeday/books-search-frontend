const path = require("path");
const { Router } = require("express");
const bookRoutes = require("./bookRoute");
const googleRoutes = require("./googleRoute");

Router.use("/books", bookRoutes);
Router.use("/google", googleRoutes);

Router.use((req, res) => 
  res.sendFile(path.join(__dirname, "../../client/build/index.html"))
);

module.exports = Router;