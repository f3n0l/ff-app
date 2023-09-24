// server.js
const express = require('express');
const axios = require('axios');
const serverless = require("serverless-http");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/characters', async (req, res) => {
    try {
        const response = await axios.get('https://www.moogleapi.com/api/v1/characters');
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).json({ error: 'Error fetching characters' });
    }
});

app.get('/api/monsters', async (req, res) => {
    try {
        const response = await axios.get('https://www.moogleapi.com/api/v1/monsters');
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching monsters:', error);
        res.status(500).json({ error: 'Error fetching monsters' });
    }
});

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


api.use("/api/", router);
export const handler = serverless(api);