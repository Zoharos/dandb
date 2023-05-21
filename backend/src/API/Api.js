const axios = require('axios').default;
const express = require('express');
const fs = require('fs');
const writeJsonFile = require('write-json-file');
const loadJsonFile = require('load-json-file');
const router = express.Router();
const { getURLandTitleArray, getPageArray } = require('../utils/utils');

let requestsHistory = fs.existsSync("history.json") ? loadJsonFile.sync("history.json") : [];

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

router.post('/', async (req, res) => {
  try {
    const { q } = req.query;
    const { data } = await axios.get(`http://api.duckduckgo.com/?q=${q}&format=json`);
    const URLandTitleArray = getURLandTitleArray(data.RelatedTopics);
    requestsHistory = { ...requestsHistory, [`http://api.duckduckgo.com/?q=${q}&format=json`]: URLandTitleArray }
    writeJsonFile.sync("history.json", requestsHistory);
    res.send(URLandTitleArray);
  } catch(e) {
    res.status(500).send("something went wrong");
  }
});

module.exports = router;