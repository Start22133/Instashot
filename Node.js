// /getAccessToken endpoint
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/getAccessToken', async (req, res) => {
  const { code } = req.query;

  const params = new URLSearchParams();
  params.append("client_id", "YOUR_APP_ID");
  params.append("client_secret", "YOUR_APP_SECRET");
  params.append("grant_type", "authorization_code");
  params.append("redirect_uri", "https://instashot.vercel.app/auth");
  params.append("code", code);

  try {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', params);
    const tokenData = response.data;
    res.json(tokenData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  // /exchangeLongToken
app.get('/exchangeLongToken', async (req, res) => {
  const { shortToken } = req.query;

  try {
    const response = await axios.get(`https://graph.instagram.com/access_token`, {
      params: {
        grant_type: 'ig_exchange_token',
        client_secret: 'YOUR_APP_SECRET',
        access_token: shortToken
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


