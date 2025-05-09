const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 4000;

// Allow frontend to connect
app.use(cors());
app.use(express.json());

// Replace with your OpenWeatherMap API key
const API_KEY = '9995b2e2bcd2299be01b3a925e5ccd20'; 

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
