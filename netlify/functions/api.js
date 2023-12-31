const express = require('express');
const serverless = require('serverless-http');
const axios = require('axios');
const cors = require('cors');

const api = express();
const router = express.Router();

api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: false }));

router.get('/characters', async (req, res) => {
    try {
        const response = await axios.get('https://www.moogleapi.com/api/v1/characters');
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).json({ error: 'Error fetching characters' });
    }
});

router.get('/monsters', async (req, res) => {
    try {
        const response = await axios.get('https://www.moogleapi.com/api/v1/monsters');
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching monsters:', error);
        res.status(500).json({ error: 'Error fetching monsters' });
    }
});

api.use("/api/", router);
module.exports.handler = serverless(api);
