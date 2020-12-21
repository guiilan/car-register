const express = require("express");
const CarController = require("../Controller/CarController");
const CarValidation = require("../middlewares/CarValidation")
const router = express.Router();

router.post('/cars', CarValidation ,CarController.create)

module.exports = router;