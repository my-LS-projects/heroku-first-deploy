const express = require("express");
const server = express(); // create instance of express server
const port = 8000
server.listen(port, () => console.log(`SERVER RUNNING ON PORT ${port}`))
server.get('/', ( req , res ) => res.status(200).send({ message: "Server is running"}))
