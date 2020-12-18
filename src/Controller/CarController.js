const { response } = require("express");
const CarModel = require("../model/CarModel")

class CarController {

    async create(req, res){
        const car = new CarModel(req.body);
        await car
            .save()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

}

module.exports = new CarController();