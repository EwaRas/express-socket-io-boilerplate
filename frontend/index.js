const express = require('express');
const cors = require('cors');
const path = require('path');
const port = 3001;

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static('components'));
server.use(express.static('services'));


server.listen(port, ()=>{
  console.log(`Server started on port: ${port}`);
})