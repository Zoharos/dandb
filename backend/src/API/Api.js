const axios = require('axios').default;
const express = require('express');
const router = express.Router();
const { getURLandTitleArray } = require('../utils/utils');

router.get('/', async (req, res) => {
  try {
    const { q } = req.query;
    const { data } = await axios.get(`http://api.duckduckgo.com/?q=${q}&format=json`);
    res.send(getURLandTitleArray(data.RelatedTopics))
  } catch(e) {
    res.status(500).send("something went wrong");
  }
}); 

module.exports = router;