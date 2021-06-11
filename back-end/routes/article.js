var express = require('express');
const { BadRequest } = require('http-errors');
var router = express.Router();
const { pool } = require('../queries');

router.get('/topic', async (req, res) => {
    try {
        const topic = await pool.query(`SELECT * FROM "topic"`);
        return res.status(200).json(topic.rows);
    } catch (error) {
        return res.send(error);
    }

});

router.get('/saveArticle', async (req, res) => {
    try {
        await pool.query(`INSERT INTO article ()`);
        return res.status(200).json(topic.rows);
    } catch (error) {
        return res.send(error);
    }

});

module.exports = router;