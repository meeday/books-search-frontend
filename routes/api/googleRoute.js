const Rpouter = require("express").Router();
const axiosController = require("../../controllers/axios");
const { Router } = require("express");

Router.route("/")
.get(axiosController.findAll);

module.exports= router;