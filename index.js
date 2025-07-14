require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/getAccessToken', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: "Code is required" });

  try {
    const params = new URLSearchParams();
    params.append('client_id', process.env.CLIENT_ID);
    params.append('client_secret', process.env.CLIENT_SECRET);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', process.env.REDIRECT_URI);
    params.append('code', code);

    const response = await axios.post('https://api.instagram.com/oauth/access_token', params);
    res.json(response.data);
  } catch (err) {
    console.error("❌ Token error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to get token", details: err.response?.data || err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
