const express = require("express");
const CarController = require("../Controller/CarController");

const router = express.Router();

router.post('/cars', CarController.create)

module.exports = router;