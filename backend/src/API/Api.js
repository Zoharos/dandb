const axios = require('axios').default;
const express = require('express');
const router = express.Router();
const { getURLandTitleArray, getPageArray } = require('../utils/utils');

router.get('/', async (req, res) => {
  try {
    const { q, p } = req.query;
    const { data } = await axios.get(`http://api.duckduckgo.com/?q=${q}&format=json`);
    const URLandTitleArray = getURLandTitleArray(data.RelatedTopics);
    console.log(getPageArray(URLandTitleArray, parseInt(p)));
    res.send(getPageArray(URLandTitleArray, parseInt(p)));
  } catch(e) {
    res.status(500).send("something went wrong");
  }
}); 

module.exports = router;