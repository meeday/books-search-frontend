const path = require("path");
const { Router } = require("express");
const apiRoutes = require("./api");

Router.use("/api", apiRoutes);

Router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = Router;