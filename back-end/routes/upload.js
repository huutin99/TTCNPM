var express = require('express');
const { BadRequest } = require('http-errors');
var router = express.Router();
const { pool } = require('../queries');

router.post('/', async (req, res) => {
    try {
        // console.log(req.file);
        return res.send(req.file.path.replace(/\\/g, '/').replace('public/', '/'))
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;