const express = require('express');
const server = express();

const CarRoutes = require("./routes/CarRoutes")

server.use(express.json());

server.use("/", CarRoutes);

server.listen(3000, () => {
    console.log("API ON")
});

