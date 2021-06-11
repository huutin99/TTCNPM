var express = require('express');
const { BadRequest } = require('http-errors');
var router = express.Router();
const { pool } = require('../queries');

/* GET users listing. */
router.post('/', async (req, res) => {
    // console.log(req.body);
    // console.log(pool);
    try {
        // res.send('hello');
        // console.log(req.body.username);
        await pool.query(`SELECT * FROM "user" WHERE username = '${req.body.username}' AND password = '${req.body.password}`);
        // console.log(oldUser.rowCount);
    } catch (error) {
        // console.log('here')
        return res.send(error);
    }

});

module.exports = router;