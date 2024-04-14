const express = require('express');
const cors = require('cors');
const axios = require('axios');
require("dotenv").config({ path: ".env" })
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyse", async(req,res)=>{
    const payload = req.body
    const response = await axios.post(`${process.env.WORKER_ENDPOINT}`, payload)
    res.json(response.data);
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT} -> Server is running`);
})